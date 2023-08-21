const { User } = require("../../models/users");

const updateSubscription = async (req, res) => {
  const { _id, email } = req.user;
  const { subscription } = req.body;

  await User.findByIdAndUpdate(_id, { subscription }, { new: true });
  res.status(200).json({ email, subscription });
};

module.exports = updateSubscription;
