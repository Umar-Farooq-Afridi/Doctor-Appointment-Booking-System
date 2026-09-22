import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const registerUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    if (!name || !email || !password) {
      return response
        .status(400)
        .json({ success: false, message: "Missing details." });
    }

    if (!validator.isEmail(email)) {
      return response
        .status(400)
        .json({ success: false, message: "Enter valid email." });
    }

    if (password.length < 8) {
      return response.status(400).json({
        success: false,
        message: "Password must be strong(8 characters)",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = { name, email, password: hashedPassword };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    response
      .status(200)
      .json({ success: true, token, message: "User Created Successfully." });
  } catch (error) {
    console.log(error);
    response.status(400).json({ success: false, message: error.message });
  }
};

const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await userModel.find({ email });
    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      response
        .status(200)
        .json({ success: true, token, message: "User Login Successfully." });
    } else {
      response
        .status(400)
        .json({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    console.log(error);
    response.status(400).json({ success: false, message: error.message });
  }
};

const getProfile = async (request, response) => {
  try {
    const { userId } = request.body;
    const userData = await userModel.findById(userId).select("-password");
    if (!userData) {
      return response
        .status(404)
        .json({ success: false, message: "User data not found." });
    }

    response.status(200).json({ success: true, userData });
  } catch (error) {
    console.log(error);
    response.status(400).json({ success: false, message: error.message });
  }
};

const updateProfile = async (request, response) => {
  try {
    const { userId, name, phone, address, bod, gender } = request.body;
    const imageFile = request.file;

    if (!name || !phone || !address || !bod || !gender) {
      return response
        .status(404)
        .json({ success: false, message: "Missing User Data." });
    }

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      bod,
      gender,
    });

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageURL = imageUpload.secure_url;

      await userModel.findByIdAndUpdate(userId, { image: imageURL });
    }

    response.status(200).json({ success: true, message: "Profile Updated." });
  } catch (error) {
    console.log(error);
    response.status(400).json({ success: false, message: error.message });
  }
};

export { registerUser, loginUser, getProfile, updateProfile };
