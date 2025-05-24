const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  purchaseByProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  purchaseByUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
  ],
});

const Product = new mongoose.model("Product", ProductSchema);
const User = new mongoose.model("Customer", UserSchema);

module.exports = { Product, User };
