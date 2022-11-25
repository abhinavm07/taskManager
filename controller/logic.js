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
    const tasksMaster = await tasks.create(req.body);
    res.status(200).json(tasksMaster);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//Async use garye kinaki hamro database connect huna time lagxa tesaile kurna parxa
const getTask = async (req, res) => {
  try {
    //yo { id: taskID } bhaneko chai id lai naya nam diyeko matra ho tesaile attinu pardaina, req.params bhaneko ta url bata value tanya bhai halyoo
    const { id: taskID } = req.params;

    //await le value aauna kurxa
    //
    //tasks.findOne bhannye function le hamlai euta kunai object database bata tanna didaxa
    //
    // value access garna khojda chai hamle variable name :{ id: taskID } --> { _id: taskID } esari dinu parxa
    const tasksMaster = await tasks.findOne({ _id: taskID });
    //
    //edi task bhetiyena bhanye task null hunxa tesaile yo tala ko function null napathauna rakheko ho
    if (!tasksMaster) {
      return res
        .status(404)
        .json({ msg: `Sorry, No Task of id: ${taskID} found!` });
    }
    //
    //task bhetiyema hamile tyo task response pathauxau
    res.status(200).json({ tasksMaster });
    //
    //error bhayena error catch garera error pathauxau
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ functionName: "Update Task!", data: id });
};

//data base connect huna kurna parney huna le async function banako
const deleteTask = async (req, res) => {
  try {
    //if l=confused look at line 31
    const { id: taskID } = req.params;
    //
    //tasks.findByIdAndDelete le chai tyo id khojera teslai database bata delete gardaxa
    const tasksMaster = await tasks.findByIdAndDelete({ _id: taskID });
    if (!tasksMaster) {
      return res
        .status(404)
        .json({
          msg: `Sorry, No Task of id: ${taskID} found in the database!`,
        });
    }
    res
      .status(200)
      .json({
        msg: `Task with ID of ${taskID} has been deleted sucessfully from the database.`,
      });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
