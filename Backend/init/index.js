import mongoose from "mongoose";
import Product from "../models/product.js";
import Products from "./product.js";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '../.env' });

// MongoDB connection URI
const dbUrl = process.env.MONGO_URL;
// Log the URI for debugging
console.log("MongoDB URI:", dbUrl);

async function seedDatabase() {
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB...");

    // Delete all existing data in the 'products' collection
    await Product.deleteMany({});
    console.log("All existing product data deleted successfully!");

    // Insert new sample data into the 'products' collection
    await Product.insertMany(Products);
    console.log("Sample products data inserted successfully!");

  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
