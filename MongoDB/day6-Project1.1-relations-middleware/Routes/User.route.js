const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/User.model");

const userRouter = express.Router();

// userRouter.post("/register", async (req, res) => {
//   try {
//     const user = new UserModel(req.body);
//     await user.save();
//     res.status(200).send({
//       msg: "User has been registered successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     console.log("Error has been occurred while user registration");
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// });

// userRouter.post("/register", async (req, res) => {
//   const { email, password, name, age } = req.body;
//   try {
//     bcrypt.hash(password, 5, async (err, hash) => {
//       const user = new UserModel({ email, name, age, password: hash });
//       // const user = new UserModel(req.body);
//       await user.save();
//       res.status(200).send({
//         msg: "User has been registered successfully",
//       });
//     });
//   } catch (error) {
//     console.log(error);
//     console.log("Error has been occurred while user registration");
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// });

userRouter.post("/register", async (req, res) => {
  const { email, password, name, age } = req.body;
  try {
    bcrypt.hash(password, 5, async function (err, hash) {
      const user = new UserModel({ email, name, age, password: hash });
      await user.save();
      res.status(200).send({ msg: "user has been created" });
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

// userRouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.findOne({
//       email
//     });
//     if (user) {
//       try {
//         bcrypt.compare(password, user.password, (err, result) => {
//           if (result) {
//             const token = jwt.sign({ authorID : user._id,author : user.name }, "secret");
//             res.status(200).send({
//               msg: "Logged in successfully",
//               // token : "abc123"
//               token: token,
//             });
//           } else {
//             res.status(200).send({ err: err.message });
//           }
//         });
//       } catch (error) {
//         console.log(error);
//         console.log("Error has been occurred while getting user details");
//         res.status(400).send({
//           error: error.message,
//         });
//       }
//     } else {
//       res.status(200).send({
//         msg: "Please enter valid credentials",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     console.log("Error has been occurred while user logging in");
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// });

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          const token = jwt.sign(
            { authorID: user.id, author: user.name },
            "secret"
          );
          res.status(200).send({ msg: "login successful", token: token });
        } else {
          res.status(200).send({ msg: "wrong credentials" });
        }
      });
    } else {
      res.status(200).send({ msg: "wrong credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

// userRouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.findOne({
//         email : email,
//         password
//     });
//     console.log(user);
//     if (user) {
//         const token = jwt.sign({course:"backend"},"secret");
//         res.status(200).send({
//             msg : "Logged in successfully",
//             // token : "abc123"
//              token : token
//         })
//     } else {
//         res.status(200).send({
//             msg : "Please enter valid credentials"
//         })
//     }
//   } catch (error) {
//     console.log(error);
//     console.log("Error has been occurred while user registration");
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// });

module.exports = { userRouter };
