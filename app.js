const express = require("express");
const cors = require("cors");
require("dotenv").config();
const errorHandler = require("./middleware/error.middleware");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Error handler
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("API is running");
});
// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/categories", require("./routes/category.routes"));
app.use("/api/items", require("./routes/item.routes"));

module.exports = app; 