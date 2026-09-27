require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Product = require("../models/Product");
const products = require("../data/products.json");

async function seed() {
  await connectDB();

  await Product.deleteMany({});
  console.log("Cleared existing products.");

  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products.`);

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
