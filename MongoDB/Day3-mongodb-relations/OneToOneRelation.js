//while using this file change the file name into index.js and run it

const express = require("express");
const { connection } = require("./database");
const { Address, User } = require("./UserAddressSchema");

const app = express();
app.use(express.json());

app.post("/user", async (req, res) => {
  const address = await Address.create(req.body.address);
  const user = await User.create({ ...req.body.user, address: address._id });
  res.json(user);
});

app.get("/user/:id",async (req,res) => {
  const user = await User.findById(req.params.id).populate("address");
  res.json(user);
})

app.listen("8080", async () => {
  try {
    await connection;
    console.log("db connection was successful");
  } catch (error) {
    console.log("There was an error while connecting the database");
    console.log(error);
  }
  console.log("Listening on the port 8080");
});
