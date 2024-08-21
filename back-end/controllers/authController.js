import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Auth from "../models/authModels.js";
import { check, validationResult } from "express-validator";

export const signUp = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ message: error.message });
  }
  const newuser = new Auth(req.body);
  const { username, mobile, password } = req.body;
  try {
    let user = await Auth.findOne({ username });
    console.log(user);

    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    if (username.toLowerCase() == "admin") {
      return res.status(400).json({ message: "new user is admin" });
    }
    const salt = await bcrypt.genSalt(10);
    newuser.password = await bcrypt.hash(password, salt);
    await newuser.save();
    const payload = {
      newuser: {
        id: newuser.id,
      },
    };
    jwt.sign(payload, "randomString", { expiresIn: 10000 }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token });
    });
  } catch (error) {
    res.status(500).send({ message: "Error In Saving" });
  }
};

export const signIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await Auth.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ message: "نام کاربری یا رمز عبور نادرست میباشد!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrent Password" });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, "secret", { expiresIn: 3600 }, async (error, token) => {
      if (error) throw error;
      const updateTodo = await Auth.updateOne(
        { _id: user.id },

        { $set: { token } }
      );
      res.status(200).json({ token, id: user.id });
    });
  } catch {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await Auth.find();
    res.json(user);
  } catch {
    json.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await Auth.findById(req.params.id);
    res.json(user);
  } catch {
    res.send({ message: "Error in Fetching user" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateUser = await Auth.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resetUserPassword = async (req, res) => {
  const { username } = req.params;
  const { password } = req.body;
  let user = await Auth.findOne({ username });
  try {
    let reqBody = req.body;
    const salt = await bcrypt.genSalt(10);
    reqBody.password = await bcrypt.hash(password, salt);
    const updateUser = await Auth.updateOne(
      { _id: user._id },
      { $set: reqBody }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
