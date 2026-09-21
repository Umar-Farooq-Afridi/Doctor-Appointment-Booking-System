import express from "express";
import {
  addDoctor,
  loginAdmin,
  allDoctors,
} from "../controllers/admin.controller.js";
import upload from "../middlewares/multer.js";
import authAmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);
adminRouter.post("/add-doctor", authAmin, upload.single("image"), addDoctor);
adminRouter.post("/all-doctors", authAmin, allDoctors);

export default adminRouter;
