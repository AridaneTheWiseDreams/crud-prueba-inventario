import { dbModels } from "../models/index.js";
const Users = dbModels.Users;

export const addUser = async (req, res) => {
  try {
    const requiredFields = ["email", "password", "username", "rol"];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body)
    );

    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    let user = new Users(req.body);
    await user.save();
    res.status(200).send({ message: "Successfully added the new user" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    let users = await Users.find();
    if (!users || users.length === 0) {
      return res.status(200).send({ data: [], message: "No users found" });
    }

    res.status(200).send({ data: users });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "Internal server error" });
  }
};

export const getOneUser = async (req, res) => {
  try {
    let userId = req.params.userId;
    let user = await Users.findById(userId);
    if (!user) {
      return res.status(404).send({
        message: `No found the  user with this id ${userId}`,
      });
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const deleteOneUser = async (req, res) => {
  try {
    let userId = req.params.userId;
    let deleteduser = await Users.findByIdAndDelete(userId);
    if (!deleteduser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ status: 200, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const updateOneUser = async (req, res) => {
  try {
    let userId = req.params.userId;
    let updateUser = await Users.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User update successfully" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};
