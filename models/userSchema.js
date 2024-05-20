import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  number: { type: Number },
});
const model = mongoose.model("userdata", schema);
export default model;
