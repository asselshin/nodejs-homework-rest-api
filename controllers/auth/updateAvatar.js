const fs = require("fs").promises;
const path = require("path");
const Jimp = require("jimp");
const { User } = require("../../models/users");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id, email } = req.user;
  const { path: tempUpload, originalname } = req.file;

  const extension = originalname.split(".").pop();
  const name = email.split("@").shift();
  const filename = `${name}.${extension}`;

  const resultUpload = path.join(avatarsDir, filename);

  Jimp.read(tempUpload, (err, image) => {
    if (err) throw err;
    image.resize(250, 250).quality(60).write(resultUpload);
  });

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
