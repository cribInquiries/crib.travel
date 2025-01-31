export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!, // adminUsers
  listingsCollectionId: process.env.NEXT_PUBLIC_APPWRITE_LISTINGS_COLLECTION!,
  realUsersCollectionId:
    process.env.NEXT_PUBLIC_APPWRITE_REAL_USERS_COLLECTION!, // users
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  secretKey: process.env.NEXT_APPWRITE_KEY!,
};
