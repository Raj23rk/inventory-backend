const Item = require("../models/Item");

// Create item
exports.createItem = async (req, res) => {
  const item = await Item.create(req.body);
  res.json(item);
};

// Get items with pagination + search + filter
exports.getItems = async (req, res) => {
  const { page = 1, limit = 10, search = "", category } = req.query;

  const query = {
    name: { $regex: search, $options: "i" },
  };

  if (category) {
    query.category = category;
  }

  const items = await Item.find(query)
    .populate("category")
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Item.countDocuments(query);

  res.json({ items, total });
};