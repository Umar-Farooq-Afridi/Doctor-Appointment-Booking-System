import "dotenv/config";

import app from "./app.js";
import connectDB from "./config/database.js";
import connectCloudinary from "./config/cloudinary.js";

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    console.log("\n=============================================");
    await connectDB();
    connectCloudinary();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
      console.log("=============================================\n");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
