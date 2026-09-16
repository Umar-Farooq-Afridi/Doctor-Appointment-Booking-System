import express from "express";
import { addDoctor, loginAdmin } from "../controllers/admin.controller.js";
import upload from "../middlewares/multer.js";
import authAmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);

export default adminRouter;
