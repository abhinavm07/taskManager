const mongoose = require("mongoose"); //yo bhanya db lai change garney euta npm package ho

const db = (url) => {
  //esma chai mongoose bata mongodb ma connect garera connectionstring bhannye string bata db connect garr bhaneko xa
  mongoose
    .connect(url, {
      useNewUrlParser: true, //yo chai decription garna chaine para meters ho arey
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }) //edi connect bhayo bhanye chai then yo block of code execute garr bhaneko hoo
    .then(console.log("DB Connected"))
    //edi error payo bhanye teslai cath garera dekhaide bhanya xa
    .catch((err) => console.log(err));
};
//ani yota export gareko bhai halyo
module.exports = db;
