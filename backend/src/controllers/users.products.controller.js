import { dbModels } from "../models/index.js";
const UsersProducts = dbModels.UsersProducts;

export const addUsersProducts = async (req, res) => {
  try {
    const requiredFields = ["user_id", "product_id", "quantity_product"];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body)
    );

    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    let userProduct = new UsersProducts(req.body);
    await userProduct.save();
    res.status(200).send({ message: "Successfully added the user product" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const getUserProductByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    let userProducts = await UsersProducts.find({ user_id: userId })
      .populate("user_id")
      .populate("product_id");
    if (!userProducts) {
      return res.status(404).send({
        data: [],
        message: `No found the user product with this user id ${userId}`,
      });
    }
    res.status(200).send({ data: userProducts });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const getAllUsersProducts = async (req, res) => {
  try {
    let usersProducts = await UsersProducts.find()
      .populate("user_id")
      .populate("product_id");
    if (!usersProducts || usersProducts.length === 0) {
      return res
        .status(200)
        .send({ data: [], message: "No users products found" });
    }

    res.status(200).send({ data: usersProducts });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const deleteOneUserProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let deletedUserProduct = await UsersProducts.findByIdAndDelete(id);
    if (!deletedUserProduct) {
      return res.status(404).send({ message: "User product not found" });
    }
    res.status(200).send({ message: "User product deleted successfully" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const updateOneUserProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let updateUserProduct = await UsersProducts.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateUserProduct) {
      return res.status(404).send({ message: "User product not found" });
    }
    res.status(200).send({ message: "User product update successfully" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};
