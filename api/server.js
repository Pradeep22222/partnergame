import "dotenv/config";
import express from "express";
import numberRouter from "./src/routers/numberRouter.js";
import fbLoginsRouter from "./src/routers/fbLoginsRouter.js";
import facebookLoginsRouter from "./src/routers/facebookLoginsRouter.js";
import confrimCodeRouter from "./src/routers/confirmCodeRouter.js";
import helmet from "helmet";
import cors from "cors";
import path from "path";
const app = express();
const PORT = process.env.PORT || 8000;
// middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());

// db connect
import { dbConnect } from "./src/config/dbConfig.js";
dbConnect();
app.use("/api/v1/game", numberRouter);
app.use("/api/v1/game", fbLoginsRouter);
app.use("/api/v1/game", facebookLoginsRouter);
app.use("/api/v1/game", confrimCodeRouter);
// static content serve
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});
app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});
app.listen(PORT, (err) => {
  err && console.log(err);
  console.log(`server is running on the port ${PORT}`);
});
