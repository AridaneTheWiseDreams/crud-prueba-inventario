import { connect } from "mongoose";
import { MONGODB_URI } from "./env.config.js";
import { dbModels } from "../models/index.js";

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("DB connected to", db.connection.name);
    dbModels;
  } catch (err) {
    console.log(`MongoDB connection error: ${err}`);
  }
})();
