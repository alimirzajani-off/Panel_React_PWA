import mongoose from "mongoose";

const Auth = new mongoose.Schema({
  username: String,
  password: String,
  mobile: Number,
});

export default mongoose.model("Auth", Auth);
