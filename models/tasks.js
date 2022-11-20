//Esle mongoose import garney bho
const mongoose = require("mongoose");

//Moongoose ma bhako Schema gives a structure to the document
// taskSchema bhannye promise lai chai hamle database ma use hunye id haru ra tesko datatypes haru assign gardeyau
const taskSchema = new mongoose.Schema({
  //name bhannye json object chai required hunu paryo, string ma hunu paryo ani agadi paxadi space bhaye teslai trim garnu paryo ra 20 length bhanda thulo character huna bhayena
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  // completed ko default chai false hunye bhayo bhayeni nabhayeni
  completed: {
    type: Boolean,
    default: false,
  },
});

// export garda chai hamle mongoose ma bhayeko model function use gardai databse lai taskScheme jasari structure dinxau ra id ani datatypes haru assign garxau
module.exports = mongoose.model("Tasks", taskSchema);
