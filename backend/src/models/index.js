import productsModel from "./products.model.js";
import usersModel from "./users.model.js";
import usersProductsModels from "./users.products.models.js";

export const dbModels = {};

dbModels.Products = productsModel;
dbModels.Users = usersModel;
dbModels.UsersProducts = usersProductsModels;
