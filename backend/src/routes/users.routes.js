import { Router } from "express";
import {
  addUser,
  deleteOneUser,
  getAllUser,
  getOneUser,
  updateOneUser,
} from "../controllers/users.controller.js";
import { signin } from "../middlewares/authentication.middleware.js";

const router = Router();

router.get("/:productId", getOneUser);
router.get("/", getAllUser);
router.post("/", addUser);
router.delete("/:productId", deleteOneUser);
router.put("/:productId", updateOneUser);

router.post("/signin", signin);

export default router;
