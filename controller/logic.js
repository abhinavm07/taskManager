const tasks = require("../models/tasks");

const firstTask = (req, res) => {
  res.status(200).json({ success: true, data: "Joe Baba" });
  console.log("Hello There");
};

// task lai asyc banayera hamle database connect huna kurxau
const createTask = async (req, res) => {
  //yaha database connect bhayesi schema bata payeko structure ma req.body ma bhayeko value pass garxau
  try {
    //yo garesi hamro database ma pani data push hunxa
    const tasksMaster = await task.create(req.body);
    res.status(200).json(tasksMaster);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
