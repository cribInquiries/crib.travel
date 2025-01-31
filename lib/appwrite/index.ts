"use server";

import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Storage,
} from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { cookies } from "next/headers";

// Create session client
export const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  const session = (await cookies()).get("appwrite-session");

  if (!session || !session.value) {
    console.warn("No session found. Returning a default client.");
    return {
      account: null,
      databases: null,
    };
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};

// Create admin client
export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get avatars() {
      return new Avatars(client);
    },

    get listings() {
      return new Databases(client);
    },

    get storage() {
      return new Storage(client);
    },
  };
};

// Function to generate a random listing
// listings.client.ts

// Function to create a Listings client
export const createListingsClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey); // Uses the secret key for admin operations

  return {
    get databases() {
      return new Databases(client);
    },
  };
};
