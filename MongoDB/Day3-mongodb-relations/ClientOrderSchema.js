const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    orders : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Order"
    }]
})

const OrderSchema = new mongoose.Schema({
    item : String,
    quantity : Number
})

const Order = new mongoose.model("Order",OrderSchema);
const User = new mongoose.model("Client",UserSchema);

module.exports = {Order,User};