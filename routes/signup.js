import express from "express";
import { addNewUser } from "../controllers/signup.js";

const router = express.Router();
router.route("/").post(addNewUser);

export default router;
