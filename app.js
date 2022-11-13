const express = require("express");

const app = express();

const tasks = require("./routes/tasks");

const port = 3000;

// app.use(express.static("./public"));

//routes
app.get("/hello", (req, res) => {
  res.status(200).json({ success: true, data: "Hello There" });
  console.log("Hello There");
});

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`And We're LIVE !`);
});
