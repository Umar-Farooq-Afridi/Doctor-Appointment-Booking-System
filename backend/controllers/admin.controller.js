import doctorModel from "../models/doctor.model";
import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";

const addDoctor = async (request, response) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = request.body;
    const imageFile = request.file;

    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return response
        .status(400)
        .json({ success: false, message: "Missing Details." });
    }

    if (!validator.isEmail(email)) {
      return response
        .status(400)
        .json({ success: false, message: "Please enter a valid email." });
    }

    if (password.length < 8) {
      return response
        .status(400)
        .json({ success: false, message: "Please enter a strong password." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    response
      .status(200)
      .json({ success: true, message: "Doctor Added", newDoctor });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
};

const loginAdmin = async (request, response) => {
  try {
    const { email, password } = request.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      response
        .status(200)
        .json({ success: true, message: "Login Successfull", token });
    } else {
      response
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
};

export { addDoctor, loginAdmin };
