import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rol: { type: String, required: true },
});

export default model("Users", usersSchema);
