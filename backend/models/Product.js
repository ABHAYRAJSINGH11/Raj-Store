const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    stars: { type: Number, required: true, min: 1, max: 5 },
    text: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    // Keep the same numeric `id` the frontend already uses, so script.js
    // needs minimal changes when it switches from the hardcoded array to the API.
    id: { type: Number, required: true, unique: true, index: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["fashion", "shoes", "cosmetics", "electronics", "lifestyle"],
    },
    description: { type: String, required: true },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    reviews: { type: [reviewSchema], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
