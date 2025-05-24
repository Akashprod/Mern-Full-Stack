const express = require("express");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/User.route");
// const jwt = require("jsonwebtoken");
const { auth } = require("./Middleware/auth.middleware");
const { notesRouter } = require("./Routes/Notes.route");
const app = express();
app.use(express.json());

app.use(auth);

app.use("/notes", notesRouter);

app.use("/users", userRouter);

app.get("/movies", (req, res) => {
  res.status(200).send("You are authorized to see movie data");

  // const { token } = req.query;
  //  const token  = req.headers.authorization;
  // const token = req.headers.authorization.split(" ")[1];
  // console.log(token);
  // jwt.verify(token, "secret", (error, decoded) => {
  //   if (decoded) {
  //     res.status(200).send("Authorized to see movie data");
  //   } else {
  //     res.status(400).send({ error: error.message });
  //   }
  // });
  // if(req.query.token === "abc123"){
  //     res.send("Authorized to see movie data");
  // }else{
  //     res.send("Not Authorized");
  // }
});

app.get("/series", (req, res) => {
  res.status(200).send("You are authorized to see series data");
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
