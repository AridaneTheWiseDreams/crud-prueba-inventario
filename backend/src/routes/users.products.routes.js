import { Router } from "express";
import {
  addUsersProducts,
  deleteOneUserProduct,
  getAllUsersProducts,
  getUserProductByUserId,
  updateOneUserProduct,
} from "../controllers/users.products.controller.js";

const router = Router();

router.get("/:userId", getUserProductByUserId);
router.get("/", getAllUsersProducts);
router.post("/", addUsersProducts);
router.delete("/:id", deleteOneUserProduct);
router.put("/:id", updateOneUserProduct);

export default router;
