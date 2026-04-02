const nodemailer = require("nodemailer");
const EmailTemplate = require("../models/EmailTemplate");
const parseTemplate = require("../utils/templateParser");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generic send email using template
const sendEmail = async (templateName, to, variables) => {
  // Fetch template from DB
  const template = await EmailTemplate.findOne({ name: templateName });

  if (!template) throw new Error("Template not found");

  // Replace variables
  const html = parseTemplate(template.html, variables);

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: template.subject,
    html,
  });
};

module.exports = sendEmail;