import express from "express";
import {
  addDoctor,
  loginAdmin,
  allDoctors,
  appointmentsAdmin,
} from "../controllers/admin.controller.js";
import upload from "../middlewares/multer.js";
import authAmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctor.controller.js";

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);
adminRouter.post("/add-doctor", authAmin, upload.single("image"), addDoctor);
adminRouter.post("/all-doctors", authAmin, allDoctors);
adminRouter.post("/change-availability", authAmin, changeAvailability);

adminRouter.get("/appointments", authAmin, appointmentsAdmin);

export default adminRouter;
