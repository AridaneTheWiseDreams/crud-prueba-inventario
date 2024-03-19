import app from "./config/app.config.js";
import "./config/db.config.js";
import { PORT } from "./config/env.config.js";

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
