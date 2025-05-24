// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];

//   if (token) {
//     try {
//       const decoded = jwt.verify(token, "secret");
//       if (decoded) {
//         // console.log(decoded);
//         (req.body.authorID = decoded.authorID),
//         (req.body.author = decoded.author);
//         next();
//       } else {
//         res.send({ msg: "Please enter valid token" });
//       }
//     } catch (error) {
//       res.send({ error: error.message });
//     }
//   } else {
//     res.send({ msg: "Please login, we are unable to find the token" });
//   }
// };

// module.exports = { auth };


const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ msg: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send({ msg: "Token not found in authorization header" });
  }
  if (token) {
    try {
      const decoded = jwt.verify(token, "secret");
      if (decoded) {
        // console.log(decoded);
        req.body = req.body || {};
        (req.body.authorID = decoded.authorID),
          (req.body.author = decoded.author);
        next();
      } else {
        res.send({ message: "please login" });
      }
    } catch (error) {
      res.send({ error: error.message });
    }
  } else {
    res.send({ message: "please login with token" });
  }
};

module.exports = {
  auth,
};
