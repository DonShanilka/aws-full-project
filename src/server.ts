import express from "express";
import cors from "cors";
import itemRoutes from "./routes/item.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"]
}));

// Middleware
app.use(express.json());

// Debug log (IMPORTANT for testing)
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

app.use("/api/items", itemRoutes);

// Health check
app.get("/ping", (req, res) => {
  res.json({ message: "Server is running" });
});

// Error handler (must be last)
app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
  console.log("Database Connected");
  console.log(`Server Running on Port ${PORT}`);
});