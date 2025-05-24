//while using this file change the file name into index.js and run it

const express = require("express");
const { connection } = require("./database");
const { Order, User } = require("./ClientOrderSchema");

const app = express();
app.use(express.json());

app.post("/client", async (req,res) => {
    const orders = await Order.insertMany(req.body.orders);
    const ordersIds = orders.map(order=>order._id);

    const user = await User.create({...req.body.user,orders : ordersIds});
    res.json(user);
})

app.get("/client/:id",async (req,res) => {
    const user = await User.findById(req.params.id).populate("orders");
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
