import { compareSync, hashSync } from "bcryptjs";
import User from "../models/User";

export const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }
  return res.status(200).json({ users });
};

// Signup
export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.length < 6
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  const hashedPassword = hashSync(password);
  let user;
  try {
    user = new User({ email, name, password: hashedPassword });
    await user.save();
  } catch (err) {
    return console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(201).json({ message: "User Created", user });
};

// Login
export const login = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email && email.trim() === "" && !password && password.length < 6) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "No User Found" });
  }
  const isPasswordCorrect = compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }

  return res.status(200).json({
    id: existingUser._id,
    message: "Login Successful",
  });
};
