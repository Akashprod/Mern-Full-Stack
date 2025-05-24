const express = require("express");
const {HeroModel} = require("../Model/Hero.model");

const HeroRouter = express.Router();

HeroRouter.post("/createhero", async (req, res) => {
  const data = req.body;
  //   console.log(data);

  try {
    const hero = new HeroModel(data);
    await hero.save();
    res.send("hero created successfully");
  } catch (error) {
    console.log(error);
    console.log("Error while creating hero");
  }
});

module.exports = {HeroRouter}