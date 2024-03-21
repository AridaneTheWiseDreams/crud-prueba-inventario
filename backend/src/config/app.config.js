import express from "express";
import cors from "cors";
import morgan from "morgan";
import productsRoute from "../routes/products.routes.js";
import usersRoute from "../routes/users.routes.js";
import usersProductRoute from "../routes/users.products.routes.js";

const app = express();

let corsOptions = {
  origin: "*",
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors(corsOptions));

app.use(morgan("dev"));

app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api/users-products", usersProductRoute);

export default app;
