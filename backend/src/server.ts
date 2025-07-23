import express, { Request, Response } from "express";
import cors from "cors";
import { testDatabaseConnection } from "./db";
import dotenv from "dotenv";
import { promisePool } from "./db";

// Import routes
import contactRouter from "./routes/contact";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Your Next.js app URL
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test database connection on startup
testDatabaseConnection();

// Basic route
app.get("/", async (req: Request, res: Response) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM products");
    res.json({ message: "Products fetched successfully", data: rows });
  } catch (error) {
    console.error("Error fetching products:", (error as Error).message);
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: (error as Error).message,
    });
  }
});

// Routes
app.use("/api/contact", contactRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
