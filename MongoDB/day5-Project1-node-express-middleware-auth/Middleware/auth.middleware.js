const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, "secret");
      if (decoded) {
        next();
      } else {
        res.send({ msg: "Please enter valid token" });
      }
    } catch (error) {
      res.send({ error: error.message });
    }
  } else {
    res.send({ msg: "Please login we are unable to find the token" });
  }
};

module.exports = { auth };
