const mongoose = require("mongoose");

const heroSchema = mongoose.Schema(
  {
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
  },
  {
    versionKey: false,
  }
);

const HeroModel = mongoose.model("hero", heroSchema);

module.exports = { heroSchema, HeroModel };
