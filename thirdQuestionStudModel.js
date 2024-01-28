var mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/testDb3");


var Schema = mongoose.Schema;


var studSchema = new Schema(
  { _id: Number, name: String, age: Number, gender: String },
  { versionKey: false }
);


var studModel = mongoose.model("studs", studSchema);


studModel;
module.exports = studModel;