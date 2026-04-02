const router = require("express").Router();
const {
  createItem,
  getItems,
} = require("../controllers/item.controller");

const auth = require("../middleware/auth.middleware");

router.post("/", auth, createItem);
router.get("/", auth, getItems);

module.exports = router;