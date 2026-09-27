import doctorModel from "../models/doctor.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const changeAvailability = async (request, response) => {
  try {
    const { docId } = request.body;
    const docData = await doctorModel.findById(docId);

    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    response
      .status(200)
      .json({ success: true, message: "Availability Changed" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
};

const doctorList = async (request, response) => {
  try {
    const doctors = await doctorModel.find({}).select(["-email", "-password"]);
    if (!doctors) {
      return response
        .status(404)
        .json({ success: false, message: "Doctors not found!" });
    }

    response.status(200).json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
};

const loginDoctor = async (request, response) => {
  try {
    const { email, password } = request.body;
    const doctor = await doctorModel.findOne({ email });

    if (!doctor) {
      return response
        .status(404)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (isMatch) {
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
      response.status(200).json({ success: true, token });
    } else {
      return response
        .status(404)
        .json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
};

const appointmentsDoctor = async (request, response) => {
  try {
    const { docId } = request.body;
    const appointments = await doctorModel.find({ docId });

    if (!appointments) {
      return response
        .status(404)
        .json({ success: false, message: "No Doctor Appointments." });
    }

    response.status(200).json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
};

export { changeAvailability, doctorList, loginDoctor, appointmentsDoctor };
