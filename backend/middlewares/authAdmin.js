import jwt from "jsonwebtoken";

const authAmin = async (request, response, next) => {
  try {
    const { atoken } = request.headers;
    if (!atoken) {
      return response
        .status(404)
        .json({ success: false, message: "Token not found." });
    }

    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return response
        .status(404)
        .json({ success: false, message: "Not Authorized Login Again." });
    }

    next();
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
};

export default authAmin;
