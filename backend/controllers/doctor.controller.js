import doctorModel from "../models/doctor.model.js";

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
    response.status(400).json({ success: false, message: error.message });
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
    response.status(400).json({ success: false, message: error.message });
  }
};

export { changeAvailability, doctorList };
