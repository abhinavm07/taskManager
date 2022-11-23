const express = require("express");

const app = express();

// yo db sanga connect gareko bhayo jun chai tyo path ma xa

const db = require("./db/connect");

// yo env file use garna chaine package
//esle chai hamlai env variable banayera database sanga connect garna dinxa jasle hamro database ko  username ra password secure rakhxa
const dotenv = require("dotenv");

//esle env ko error haru hatauxa (?)
dotenv.config();

const tasks = require("./routes/tasks");

//esle json format ma bhako obj tanney kam garxaa
app.use(express.json());

const port = 3000;

// app.use(express.static("./public"));

//routes
app.get("/hello", (req, res) => {
  console.log("Hello There");
});

app.use("/api/v1/tasks", tasks);

//yo database connect huna kehi samaya lagxa tesaile eslai async function banayera try catch use gareko
const dbConnection = async () => {
  //if database sanga successful connection bhayo bhanye try block of code run hunxa
  try {
    // await le db function naaunun jel samma kuexa    // proccess.env.variableName le chai env file ma bhako variable ko use garxa ra teslai function ma pathauxa
    await db(process.env.mongoUrl);
    app.listen(port, () => {
      console.log("Database Connected");
      console.log(`And We're LIVE !`);
    });
  } catch (error) {
    //catch le error samatne bhayo
    return console.log(error);
  }
};

dbConnection();
