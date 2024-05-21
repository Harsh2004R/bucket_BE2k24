const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const { auth } = require("../middlewares/auth.middleware.js")

const userRouter = express.Router();
userRouter.use(express.json())

// register logic here.
userRouter.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body

  try {
    // Check if the email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error_msg: "Email already registered" });
    }
    bcrypt.hash(password, 8, async (err, hash) => {
      // Store hashed password in your DB.
      if (err) {
        res.status(250).json({ error_msg: err.message })
      } else {
        const user = new UserModel({ fullName, email, password: hash })
        await user.save()
        res.status(200).json({ msg: "user has been added", new_user: req.body })
      }

    });


  } catch (error) {
    res.status(400).json({ error_msg: error.message })
  }
})

// login logic here.
userRouter.post("/login", async (req, res) => {

  const { email, password } = req.body
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({ error_msg: "Error comparing passwords", msg: "failed to login" });
        }
        if (result) {
          const token = jwt.sign({ userId: user._id }, 'bucket');
          res.status(200).json({ msg: "login successful", token: token, userId: user._id });
          console.log("Login successful");
        } else {
          res.status(401).json({ msg: "Invalid email or password" });
        }
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error_msg: error.message });
  }

})

module.exports = {
  userRouter
}