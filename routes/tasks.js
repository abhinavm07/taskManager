const express = require("express");

const router = express.Router();

const {
  firstTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/logic"); //yini haru ko logic sav controller/logic ma xa

router.get("/", firstTask); //esle server bata data tannye bho
router.post("/", createTask); //esle data server ma falney bho
router.get("/:id", getTask); //esle euta matra specific data tannye bho
router.patch("/:id", updateTask); //esle update garney bho data
router.delete("/:id", deleteTask); //esle data delete garney bho

module.exports = router;
