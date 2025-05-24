const express = require("express");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/User.route");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

app.use("/", userRouter);

app.get("/movies", (req, res) => {
  const { token } = req.query;
  jwt.verify(token, "secret", (error, decoded) => {
    if (decoded) {
      res.status(200).send("Authorized to see movie data");
    } else {
      res.status(400).send({ error: error.message });
    }
  });
  // if(req.query.token === "abc123"){
  //     res.send("Authorized to see movie data");
  // }else{
  //     res.send("Not Authorized");
  // }
});

app.listen("8080", async () => {
  try {
    await connection;
    console.log("connected to database successfully");
  } catch (error) {
    console.log("Error while making connection to database");
  }
  console.log("Listening to port 8080");
});
