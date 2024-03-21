import { Schema, model, Types } from "mongoose";

const usersProductsSchema = new Schema({
  user_id: { type: Types.ObjectId, ref: "Users", required: true },
  product_id: { type: Types.ObjectId, ref: "Products", required: true },
  quantity_product: { type: Number, required: true },
  accepted: { type: Boolean, required: true },
});
export default model("UsersProducts", usersProductsSchema);
