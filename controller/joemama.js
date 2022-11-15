const firstTask = (req, res) => {
  res.status(200).json({ success: true, data: "Joe Baba" });
  console.log("Hello There");
};

const createTask = (req, res) => {
  const { name } = req.body;
  console.log(name, req.body);
  res.status(200).json(name);
};

const getTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ functionName: "Get Task!", data: id });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ functionName: "Update Task!", data: id });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ functionName: "Delete Task!", data: id });
};

module.exports = { firstTask, createTask, getTask, updateTask, deleteTask };
