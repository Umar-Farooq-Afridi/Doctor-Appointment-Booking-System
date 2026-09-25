import express from "express";
import {
  bookAppointment,
  cancelAppointment,
  getProfile,
  listAppointment,
  loginUser,
  registerUser,
  updateProfile,
} from "../controllers/user.controller.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile,
);

userRouter.post("/book-appointment", authUser, bookAppointment);
userRouter.post("/cancel-appointment", authUser, cancelAppointment);

userRouter.get("/get-profile", authUser, getProfile);
userRouter.get("/appointments", authUser, listAppointment);

export default userRouter;
