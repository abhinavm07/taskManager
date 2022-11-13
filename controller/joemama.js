const firstTask = (req, res) => {
  res.status(200).json({ success: true, data: "Joe Baba" });
  console.log("Hello There");
};

module.exports = { firstTask };
