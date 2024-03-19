import { Schema, model } from "mongoose";

const productsSchema = new Schema({
  title: { type: String, required: true },
  material: { type: String, required: true },
  stock: { type: Number, required: true },
});

export default model("Products", productsSchema);
