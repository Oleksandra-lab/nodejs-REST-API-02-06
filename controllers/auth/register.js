const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { HttpError, sendEmail } = require("../../helpers");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const  jwt  = require("jsonwebtoken");
const {SECRET_KEY} = process.env;

const {BASE_URL} = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  // const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    // verificationToken,
  });
console.log(newUser);

const payload = {
  id: newUser._id
}

const  token = jwt.sign(payload, SECRET_KEY)
await User.findByIdAndUpdate(newUser._id, {token})
  // const verifyEmail = {
  //   to: email,
  //   subject: "Verify email",
  //   html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Confirm email</a>`
  // }

  // await sendEmail(verifyEmail);

  res.status(201).json({
    
    user:{
      email: newUser.email,
      name: newUser.name,
      avatarURL,
    },
    token
  });
};

module.exports = register;
