import { Router } from "express";
import {
  addProduct,
  deleteOneProduct,
  getAllProducts,
  getOneProduct,
  updateOneProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/:productId", getOneProduct);
router.get("/", getAllProducts);
router.post("/", addProduct);
router.delete("/:productId", deleteOneProduct);
router.put("/:productId", updateOneProduct);

export default router;
