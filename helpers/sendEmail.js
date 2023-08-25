const nodemailer = require("nodemailer");
require("dotenv").config();
const {
  OAUTH_CLIENTID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
  MAIL_PASSWORD,
  MAIL_USERNAME,
} = process.env;

const nodemailerConfig = {
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD,
    clientId: OAUTH_CLIENTID,
    clientSecret: OAUTH_CLIENT_SECRET,
    refreshToken: OAUTH_REFRESH_TOKEN,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const mail = { ...data, from: "assel.apple.city@gmail.com" };
  await transporter.sendMail(mail);
  return true;
};

module.exports = sendEmail;
