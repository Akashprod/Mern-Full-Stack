const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model("user",userSchema);

module.exports = {userSchema,UserModel};
