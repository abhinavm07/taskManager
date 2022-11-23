const tasks = require("../models/tasks");

const getAllTask = async (req, res) => {
  try {
    //yo find bhannye mongoose query le hamlai sav bhako data database bata tanna dinxa
    //tasks.find() bhitra {} pass garesi bhako jati sav data database bata tanna sakinxa
    const task = await tasks.find({});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.status(200).send("Get ALL Tasks");
  // console.log("Hello There");
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

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
