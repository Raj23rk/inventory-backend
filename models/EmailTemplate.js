const mongoose = require("mongoose");

const emailTemplateSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true }, // ex: VERIFY_EMAIL
    subject: String,
    html: String, // full HTML content
  },
  { timestamps: true }
);

module.exports = mongoose.model("EmailTemplate", emailTemplateSchema);