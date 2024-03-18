import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(morgan("dev"));

export default app;
