const jwt = require("jsonwebtoken");
const _ = require("lodash");

// Check if the user is authenticated
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (_.isEmpty(token)) 
    {
      console.log("No token provided");

      return res.status(400).send("No token provided");
    }

  try {
    const decoded = jwt.verify(token, process.env.PRIVATEKEY);
    req.student = decoded;
    next();
  } catch (ex) {
    console.log("Invalid token provided");
    return res.status(400).send("Invalid token provided");
  }
};
