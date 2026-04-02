const express = require("express");
const router = express.Router();

const { signup, login, verifyOTP } = require("../controllers/auth.controller");

// Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/verify-otp", verifyOTP);

module.exports = router;