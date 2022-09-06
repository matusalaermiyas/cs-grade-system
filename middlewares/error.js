module.exports = (err, req, res, next) => {
  // TODO
  // winston
  console.log("Error occured ");
  console.log(err);

  res.status(500).send("Unexpected error occured");
};
