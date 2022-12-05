const notFound = (req, res) => {
  res.status(404).send("The route you are looking for doesn't exist");
};
//
module.exports = notFound;
