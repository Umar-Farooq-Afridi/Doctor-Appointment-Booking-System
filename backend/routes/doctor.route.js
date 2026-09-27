import express from "express";
import {
  appointmentCancel,
  appointmentComplete,
  appointmentsDoctor,
  doctorList,
  loginDoctor,
} from "../controllers/doctor.controller.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.post("/login", loginDoctor);
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel);

doctorRouter.get("/list", doctorList);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);

export default doctorRouter;
