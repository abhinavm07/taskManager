const tasks = require("../models/tasks");

//asyncWrapper helps us in refactoring the code by avoiding repetation of try catch blocks in controllers.
const asyncWrapper = require("../middleware/async");

const { createCustomError } = require("../errors/custom-error");

const getAllTask = asyncWrapper(async (req, res) => {
  const task = await tasks.find({});
  res.status(200).json({ task });
});

// task lai asyc banayera hamle database connect huna kurxau
const createTask = asyncWrapper(async (req, res) => {
  //yaha database connect bhayesi schema bata payeko structure ma req.body ma bhayeko value pass garxau
  //yo garesi hamro database ma pani data push hunxa
  const tasksMaster = await tasks.create(req.body);
  res.status(200).json(tasksMaster);
});

//Async use garye kinaki hamro database connect huna time lagxa tesaile kurna parxa
const getTask = asyncWrapper(async (req, res) => {
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
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  //
  //task bhetiyema hamile tyo task response pathauxau
  res.status(200).json({ tasksMaster });
});

//data base connect huna kurna parney huna le async function banako
const deleteTask = asyncWrapper(async (req, res) => {
  //if l=confused look at line 31
  const { id: taskID } = req.params;
  //
  //tasks.findByIdAndDelete le chai tyo id khojera teslai database bata delete gardaxa
  const tasksMaster = await tasks.findByIdAndDelete({ _id: taskID });
  if (!tasksMaster) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({
    msg: `Task with ID of ${taskID} has been deleted sucessfully from the database.`,
  });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  //
  //tasks.findByIdAndYpdate le argument ma provide gareko id lai req.body ma supply gareko data sanga update garda xaa
  //
  const tasksMaster = await tasks.findByIdAndUpdate({ _id: taskID }, req.body, {
    //yo third parameter le new mathlabh naya updated data return garxa bhannye  runValidator le schema ma diyiyeko validation run garera empt  value haru database ma update huna didaina
    new: true, //true bhanye tyo chalau bhaneko
    runValidators: true,
  });

  if (!tasksMaster) {
    console.log("K bhayo");
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json(tasksMaster);
});

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
