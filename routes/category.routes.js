const router = require("express").Router();
const {
  createCategory,
  getCategories,
} = require("../controllers/category.controller");

const auth = require("../middleware/auth.middleware");

router.post("/", auth, createCategory);
router.get("/", auth, getCategories);

module.exports = router;