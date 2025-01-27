const bcrypt = require("bcryptjs");
const { RequestError } = require("../../helpers");
const { User } = require("../../models/users");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, "Email in use");
  }

  const avatarURL = gravatar.url(email);

  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({
    email,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = register;
