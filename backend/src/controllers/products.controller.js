import { dbModels } from "../models/index.js";
const Products = dbModels.Products;

export const addProduct = async (req, res) => {
  try {
    const requiredFields = ["title", "material", "stock"];
    const missingFields = requiredFields.filter(
      (field) => !(field in req.body)
    );

    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    let product = new Products(req.body);
    await product.save();
    res.status(200).send({ message: "Successfully added the new product" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    let productId = req.params.productId;
    let product = await Products.findById(productId);
    if (!product) {
      return res.status(404).send({
        message: `No found the  product with this id ${productId}`,
      });
    }
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    let products = await Products.find();
    if (!products || products.length === 0) {
      return res.status(200).send({ data: [], message: "No products found" });
    }

    res.status(200).send({ data: products });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "Internal server error" });
  }
};

export const deleteOneProduct = async (req, res) => {
  try {
    let productId = req.params.productId;
    let deletedProduct = await Products.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).send({ message: "Product not found" });
    }
    res
      .status(200)
      .send({ status: 200, message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const updateOneProduct = async (req, res) => {
  try {
    let productId = req.params.productId;
    let updateProduct = await Products.findByIdAndUpdate(productId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateProduct) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send({ message: "Product update successfully" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};
