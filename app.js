import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";

import signUp from "./routes/signup.js";
import logIn from "./routes/signin.js";

//config
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//db
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (errorMessage) => console.log(errorMessage));
db.once("open", () => console.log("connected successfully to the database"));

//routes
app.use("/api/v1/signup", signUp);
app.use("/api/v1/login", logIn);

app.listen(6969, () => {
  console.log(`server running in http://localhost:6969`);
});
