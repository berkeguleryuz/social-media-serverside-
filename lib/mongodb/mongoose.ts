import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // Check if MONGODB_URL is defined
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined.");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "SocialVibe",
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};