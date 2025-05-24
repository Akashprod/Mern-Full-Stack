//while using this file change the file name into index.js and run it

const express = require("express");
const { connection } = require("./database");
const { Product, User } = require("./CustomerProductSchema");

const app = express();
app.use(express.json());

app.post("/customer", async (req, res) => {
  try {
    const products = await Product.insertMany(req.body.products);
    const productsIds = products.map((product) => product._id);

    const users = await User.create({
      ...req.body.user,
      purchaseByProducts: productsIds,
    });

    await Product.updateMany(
      { _id: { $in: productsIds } },
      { $push: { purchaseByUsers: users._id } }
    );

    res.json(users);
  } catch (error) {
    console.log("There was an error while posting the customer details");
    console.log(error);
  }
});

app.get("/customer/:id", async (req, res) => {
  const user = await User.findById(req.params.id).populate("purchaseByProducts");
  res.json(user);
});

app.get("/product/:id",async (req,res) => {
    const product = await Product.findById(req.params.id).populate("purchaseByUsers");
    res.json(product);
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
