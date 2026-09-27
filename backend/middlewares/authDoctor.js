import jwt from "jsonwebtoken";

const authDoctor = async (request, response, next) => {
  try {
    const { dtoken } = request.headers;
    if (!dtoken) {
      return response
        .status(404)
        .json({ success: false, message: "Token not found." });
    }

    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
    request.body.docId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
};

export default authDoctor;
