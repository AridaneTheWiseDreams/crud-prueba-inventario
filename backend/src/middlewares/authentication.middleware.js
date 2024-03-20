import bcrypt from "bcryptjs";

import { dbModels } from "../models/index.js";
const Users = dbModels.Users;

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const requiredFields = ["email", "password"];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body)
    );
    if (missingFields.length > 0) {
      return res.status(400).send({
        error: true,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    let userData = await Users.findOne({ email: email });

    return res.json({ rol: userData.rol });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
