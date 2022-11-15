const express = require("express");

const router = express.Router();

const {
  firstTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/logic");

router.get("/", firstTask);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
