//Esle mongoose import garney bho
const mongoose = require("mongoose");

// taskSchema bhannye promise lai chai hamle database ma use hunye id haru ra tesko datatypes haru assign gardeyau
const taskSchema = new taskSchema({
  name: String,
  completed: Boolean,
});

// export garda chai hamle mongoose ma bhayeko model function use gardai databse lai taskScheme jasari structure dinxau ra id ani datatypes haru assign garxau
module.exports = mongoose.model("Tasks", taskSchema);
