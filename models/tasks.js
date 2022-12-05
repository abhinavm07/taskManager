//Esle mongoose import garney bho.
const mongoose = require("mongoose");

//Moongoose ma bhako Schema gives a structure to the document
// taskSchema bhannye promise ma chai hamle database ma use hunye data for example eta: id haru ra tesko datatypes haru jun chai hamlai chainxa tyo hami assign garxau
const taskSchema = new mongoose.Schema({
  //tala ko code le chai hamlai name bhannye json object chai required hunu paryo, string ma hunu paryo ani agadi paxadi space bhaye teslai trim garnu paryo ra 20 length bhanda thulo character huna bhayena bhanera bhandaxa
  name: {
    type: String,
    required: [true, "must provide name"], //yo chai [true bhayema yo, false bhayema yo] bhanya ho
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  // completed ko default chai false hunye bhayo, bhayeni nabhayeni
  completed: {
    type: Boolean,
    default: false,
  },
});

// export garda chai hamle mongoose ma bhayeko model function use gardai databse lai taskScheme jasari structure dinxau ra id ani datatypes haru assign garxau
module.exports = mongoose.model("Tasks", taskSchema);
