import { Router } from "express";
import {
  addUser,
  deleteOneUser,
  getAllUser,
  getOneUser,
  updateOneUser,
} from "../controllers/users.controller";

const router = Router();

router.get("/:productId", getOneUser);
router.get("/", getAllUser);
router.post("/", addUser);
router.delete("/:productId", deleteOneUser);
router.put("/:productId", updateOneUser);

export default router;
