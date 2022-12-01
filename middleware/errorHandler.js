//simmple error handler for now which returns error as json as response.
const erroMan = (err, req, res, next) => {
  res.status(500).json({ errorDayum: err });
};

module.exports = erroMan;
