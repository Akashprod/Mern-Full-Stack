const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: String,
  name: String,
  age: Number,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
