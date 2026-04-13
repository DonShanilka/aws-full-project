import express from "express";
import itemRoutes from "./routes/item.routes";
import { errorHandler } from "./middleware/error.middleware";

const cors = require("cors");
const app = express();
const PORT = 5000;

// ✅ CORS middleware (ADD THIS)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api/items", itemRoutes);


// Error handler (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT as any, "0.0.0.0", () => {
  console.log("Database Connected");
  console.log(`Server Running on Port ${PORT}`);
});