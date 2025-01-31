"use server";

import bcrypt from "bcrypt";
import { ID, Query } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import {
  createAdminClient,
  createSessionClient,
  createListingsClient,
} from "@/lib/appwrite"; // Create Admin and Session Clients
import { parseStringify } from "@/lib/utils";
import { cookies } from "next/headers";

// Function to create a session client

// User-related functions

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", [email])],
  );

  return result.total > 0 ? result.documents[0] : null;
};

const getUserByPhoneNumber = async (phoneNumber: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("phoneNumber", [phoneNumber])],
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);

    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10; // You can adjust the salt rounds based on your security needs
  return bcrypt.hash(password, saltRounds);
};

export const createAccount = async ({
  fullName,
  email,
  password,
  phoneNumber,
}: {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
}) => {
  console.time("Check Existing Users");
  const [existingUserByEmail, existingUserByPhone] = await Promise.all([
    getUserByEmail(email),
    getUserByPhoneNumber(phoneNumber),
  ]);
  console.timeEnd("Check Existing Users");

  if (existingUserByEmail) throw new Error("Email is already registered");
  if (existingUserByPhone)
    throw new Error("Phone number is already registered");

  console.time("Hash Password");
  const hashedPassword = await hashPassword(password); // Reduced salt rounds
  console.timeEnd("Hash Password");

  console.time("Send OTP");
  const accountId = await sendEmailOTP({ email });
  console.timeEnd("Send OTP");

  if (!accountId) throw new Error("Failed to send an OTP");

  console.time("Create User Document");
  const { databases } = await createAdminClient();
  await databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    ID.unique(),
    { fullName, email, password: hashedPassword, phoneNumber, accountId },
  );
  console.timeEnd("Create User Document");

  return parseStringify({ accountId });
};

export const verifySecret = async ({
  accountId,
  password,
}: {
  accountId: string;
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();

    const session = await account.createSession(accountId, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify({ sessionId: session.$id });
  } catch (error) {
    handleError(error, "Failed to verify OTP");
  }
};

export const getCurrentUser = async () => {
  try {
    const { databases, account } = await createSessionClient();

    // Ensure valid session and clients
    if (!account || !databases) {
      console.warn("No valid session or client available.");
      return null;
    }

    const result = await account.get(); // Get account details from session

    // Query user document by accountId
    const user = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", result.$id)],
    );

    if (user.total <= 0) {
      console.warn("No user document found for this accountId.");
      return null;
    }

    console.log("User fetched successfully:", user.documents[0]);
    return parseStringify(user.documents[0]);
  } catch (error) {
    if (error.code === 401) {
      console.warn(
        "Unauthorized access or missing scope. Returning null.",
        error,
      );
    } else {
      console.error("Error in getCurrentUser:", error);
    }
    return null;
  }
};

export const signOutUser = async () => {
  const { account } = await createSessionClient();

  try {
    await account.deleteSession("current");
    (await cookies()).delete("appwrite-session");
  } catch (error) {
    handleError(error, "Failed to sign out user");
  }
};

export const signInUser = async ({ email }: { email: string }) => {
  try {
    const existingUser = await getUserByEmail(email);

    // User exists, send OTP
    if (existingUser) {
      await sendEmailOTP({ email });
      return parseStringify({ accountId: existingUser.accountId });
    }

    return parseStringify({ accountId: null, error: "User not found" });
  } catch (error) {
    handleError(error, "Failed to sign in user");
  }
};

export const uploadImage = async (file: File, bucketId: string) => {
  const { storage } = await createAdminClient();
  try {
    // Upload the image to the specified bucket
    const fileUploadResponse = await storage.createFile(
      bucketId,
      ID.unique(),
      file,
    );

    // Get the bucketFileId (the unique file ID in Appwrite)
    const bucketFileId = fileUploadResponse.$id;
    console.log("File uploaded successfully, bucketFileId:", bucketFileId);

    return bucketFileId; // Return the bucketFileId
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Failed to upload the file.");
  }
};

export const createListing = async (listingData: {
  title: string;
  subheading: string;
  propertyType: string;
  location: string;
  guestsSpace: string;
  rooms: string[];
  bucketFileId: string;
  amenities: string[];
  pricing: string[];
}) => {
  // Get the current user directly within this function
  const user = await getCurrentUser();
  if (!user) {
    console.error("No user found, unable to create listing.");
    return;
  }

  // Now you can directly use the accountId from the user object
  const { accountId } = user;

  const {
    title,
    subheading,
    propertyType,
    location,
    guestsSpace,
    rooms,
    amenities,
    bucketFileId,
    pricing,
  } = listingData;

  const listingDocument = {
    title,
    subheading,
    propertyType,
    guestsSpace,
    location,
    rooms,
    usersAccountId: accountId,
    bucketFileId, // Directly use the accountId here
    amenities,
    accountId, // You can also keep it for other purposes (optional)
    url: "https://example.com/listing-url",
    description: "This is a property description.",
    pricing,
    availabilityCalendar: ["2025-01-15", "2025-01-16", "2025-01-17"],
    valueAddedPacks: ["Breakfast", "Airport Transfer"],
  };

  try {
    const { databases } = await createListingsClient();
    const response = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.listingsCollectionId,
      ID.unique(),
      listingDocument,
    );
    console.log("Listing created:", response);
    return response;
  } catch (error) {
    console.error("Error creating listing:", error);
    throw error;
  }
};

export const handleFileUploadAndCreateListing = async (
  file: File,
  bucketId: string,
  listingData: any,
) => {
  try {
    const bucketFileId = await uploadImage(file, bucketId); // Upload the image and get the bucketFileId
    listingData.bucketFileId = bucketFileId; // Add the bucketFileId to the listing data

    // Now create the listing with the uploaded image
    const listingResponse = await createListing(listingData);
    console.log("Listing created with image:", listingResponse);
  } catch (error) {
    console.error("Error handling file upload and creating listing:", error);
  }
};
