const express = require("express");
const { connection } = require("./database");
const { UserModel } = require("./user/userSchema");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/createuser", async (req, res) => {
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

app.get("/users", async (req, res) => {
  try {
    const user = await UserModel.find();
    // console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
    console.log("Error while calling user");
  }
});

app.patch("/edituser/:userID", async (req, res) => {
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

app.delete("/deleteuser/:userID", async (req, res) => {
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

app.listen("8080", async () => {
  try {
    await connection;
    console.log("connection to db successful");
  } catch (error) {
    console.log(error);
    console.log("Error while making connection to db");
  }
  console.log("Listening to port 8080");
});
