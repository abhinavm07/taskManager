const mongoose = require("mongoose"); //yo bhanya db lai change garney euta npm package ho

const connectionString =
  "mongodb+srv://abhinavm07:Abhinav@at9869366501@nodeexpressprojects.7bfx1yj.mongodb.net/TaskManager?retryWrites=true&w=majority"; //yo bhaneko chai hamlai mongodb le provide gareko link garney url ho esma hamle password ra database ko name dinu parxa

const dbConnected = mongoose //esma chai mongoose bata mongodb ma connect garera connectionstring bhannye string bata db connect garr bhaneko xa
  .connect(connectionString, {
    useNewUrlParser: true, //yo chai decription garna chaine para meters ho arey
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(console.log("DB Connected")) //edi connect bhayo bhanye chai then yo block of code execute garr bhaneko hoo
  .catch((err) => console.log(err)); //edi error payo bhanye teslai cath garera dekhaide bhanya xa

module.exports = dbConnected; //ani yota export gareko bhai halyo
