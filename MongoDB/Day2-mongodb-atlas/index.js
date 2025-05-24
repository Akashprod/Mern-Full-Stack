const express = require("express");
const { connection } = require("./database");
const { HeroRouter } = require("./Routes/Hero.route");
const { UserRouter } = require("./Routes/User.route");

const app = express();
app.use(express.json());

app.use("/users", UserRouter);
app.use("/heros", HeroRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
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
