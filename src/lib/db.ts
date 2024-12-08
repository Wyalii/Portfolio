import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const connectToDB = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URI as string);
    const db = client.db("Portfolio");
    return db;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to connect to MongoDB.");
  }
};

export default connectToDB;
