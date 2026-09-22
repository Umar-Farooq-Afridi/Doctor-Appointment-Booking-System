import jwt from "jsonwebtoken";

const authUser = async (request, response, next) => {
  try {
    const { token } = request.headers;
    if (!token) {
      return response
        .status(404)
        .json({ success: false, message: "Token not found." });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    request.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
};

export default authUser;
