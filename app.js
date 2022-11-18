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

app.use("/api/v1/tasks", tasks);

const dbConnection = async () => {
  //yo database connect huna kehi samaya lagxa tesaile eslai async function banayera
  try {
    //if chalyo bhanye try block of code use garr bhanxa
    await db(); // await le db function naaunun jel samma kuexa
    console.log("Database Connected");
  } catch (error) {
    //catch le error samatne bhayo
    return console.log(error);
  }
};

dbConnection();

app.listen(port, () => {
  console.log(`And We're LIVE !`);
});
