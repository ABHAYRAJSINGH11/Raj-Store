const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET /api/products
// Supports the same filters the frontend UI already offers:
//   ?category=electronics
//   ?minPrice=1000&maxPrice=4000
//   ?minRating=4
//   ?sort=price-low | price-high | name | rating
//   ?search=hoodie
router.get("/", async (req, res) => {
  try {
    const { category, minPrice, maxPrice, minRating, sort, search } = req.query;
    const filter = {};

    if (category && category !== "all") filter.category = category;
    if (minRating) filter.rating = { $gte: Number(minRating) };
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    if (search) filter.name = { $regex: search, $options: "i" };

    let sortOption = {};
    if (sort === "price-low") sortOption = { price: 1 };
    else if (sort === "price-high") sortOption = { price: -1 };
    else if (sort === "name") sortOption = { name: 1 };
    else if (sort === "rating") sortOption = { rating: -1 };

    const products = await Product.find(filter).sort(sortOption);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", error: err.message });
  }
});

// GET /api/products/:id  (numeric product id, not Mongo _id)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: Number(req.params.id) });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch product", error: err.message });
  }
});

// POST /api/products  (for an admin panel, added later)
router.post("/", async (req, res) => {
  try {
    const last = await Product.findOne().sort({ id: -1 });
    const nextId = last ? last.id + 1 : 1;
    const product = await Product.create({ ...req.body, id: nextId });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: "Failed to create product", error: err.message });
  }
});

// PUT /api/products/:id
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "Failed to update product", error: err.message });
  }
});

// DELETE /api/products/:id
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ id: Number(req.params.id) });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete product", error: err.message });
  }
});

// POST /api/products/:id/reviews
router.post("/:id/reviews", async (req, res) => {
  try {
    const { author, stars, text } = req.body;
    if (!author || !stars || !text) {
      return res.status(400).json({ message: "author, stars and text are required" });
    }
    const product = await Product.findOne({ id: Number(req.params.id) });
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.reviews.push({ author, stars, text });
    product.reviewCount = product.reviews.length;
    product.rating =
      product.reviews.reduce((sum, r) => sum + r.stars, 0) / product.reviews.length;

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: "Failed to add review", error: err.message });
  }
});

module.exports = router;
