const express = require("express");
const cors = require("cors");
require("dotenv").config();
const errorHandler = require("./middleware/error.middleware");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/categories", require("./routes/category.routes"));
app.use("/api/items", require("./routes/item.routes"));

// Error handler (must be AFTER routes)
app.use(errorHandler);

module.exports = app;