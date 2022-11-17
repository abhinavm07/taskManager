const express = require("express");

const app = express();

const db = require("./db/connect"); // yo db sanga connect gareko bhayo jun chai tyo path ma xa

const tasks = require("./routes/tasks");

app.use(express.json()); //esle json parse garxaa

const port = 3000;

// app.use(express.static("./public"));

//routes
app.get("/hello", (req, res) => {
  console.log("Hello There");
});

app.get("/garoXa", (req, res) => {
  console.log("Dhilo Bho git hanna tesaile ahile lai yo");
});

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`And We're LIVE !`);
});

console.log("And We're Live!");
