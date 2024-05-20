import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { router } from "./routtes/routes.js";
import { connectDb, dburl } from "./db/db.js";
const app = express();
const port = process.env.port || 3000;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", router);
connectDb(dburl);
app.listen(port, () => {
  console.log(`server listening at localhost//:${port}`);
});
