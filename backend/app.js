import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRouter from "./routes/admin.route.js";
import doctorRouter from "./routes/doctor.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (request, response) => {
  response.send("<h1>Doctor Appointment Booking System by Umar Farooq.</h1>");
});

app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

export default app;
