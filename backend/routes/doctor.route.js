import express from "express";
import { doctorList, loginDoctor } from "../controllers/doctor.controller.js";

const doctorRouter = express.Router();

doctorRouter.post("/login", loginDoctor);

doctorRouter.get("/list", doctorList);

export default doctorRouter;
