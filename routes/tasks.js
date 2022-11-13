const express = require("express");

const router = express.Router();

const { firstTask } = require("../controller/joemama");

router.get("/", firstTask);

module.exports = router;
