const express = require("express");
const { UserModel } = require("../Models/User.model");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(200).send({
      msg: "User has been registered successfully",
    });
  } catch (error) {
    console.log(error);
    console.log("Error has been occurred while user registration");
    res.status(400).send({
      error: error.message,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({
        email : email,
        password
    });
    console.log(user);
    if (user) {
        const token = jwt.sign({course:"backend"},"secret");
        res.status(200).send({
            msg : "Logged in successfully",
            // token : "abc123"
             token : token
        })
    } else {
        res.status(200).send({
            msg : "Please enter valid credentials"
        })
    }
  } catch (error) {
    console.log(error);
    console.log("Error has been occurred while user registration");
    res.status(400).send({
      error: error.message,
    });
  }
});

module.exports = { userRouter };
