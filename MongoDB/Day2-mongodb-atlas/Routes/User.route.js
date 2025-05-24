const express = require("express");
const {UserModel} = require("../Model/User.model");

const UserRouter = express.Router();

UserRouter.post("/createuser", async (req, res) => {
  const data = req.body;
  //   console.log(data);

  try {
    const user = new UserModel(data);
    await user.save();
    res.send("user created successfully");
  } catch (error) {
    console.log(error);
    console.log("Error while creating user");
  }
});

UserRouter.get("/users", async (req, res) => {
  try {
    const user = await UserModel.find();
    // console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
    console.log("Error while calling user");
  }
});

UserRouter.patch("/edituser/:userID", async (req, res) => {
  const userID = req.params.userID;
  // console.log(userID);
  const payload = req.body;
  // console.log(payload);

  try {
    await UserModel.findByIdAndUpdate({ _id: userID }, payload);
    res.send("User details has been updated");
  } catch (error) {
    console.log(error);
    console.log("Error while editing user");
  }
});

UserRouter.delete("/deleteuser/:userID", async (req, res) => {
  const userID = req.params.userID;
  console.log(userID);
  try {
    await UserModel.findByIdAndDelete({ _id: userID });
    res.send("user deleted successfully");
  } catch (error) {
    console.log(error);
    console.log("Error while editing user");
  }
});

module.exports = {UserRouter}
