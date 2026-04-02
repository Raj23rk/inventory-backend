const Category = require("../models/Category");

// Create category
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: "Category already exists" });
  }
};

// Get categories
exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};