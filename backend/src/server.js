"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { testDatabaseConnection } from "./db";
const dotenv_1 = __importDefault(require("dotenv"));
// Import routes
const contact_1 = __importDefault(require("./routes/contact"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Your Next.js app URL
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Test database connection on startup
// testDatabaseConnection();
// Basic route
// app.get("/", async (req: Request, res: Response) => {
//   try {
//     const [rows] = await promisePool.query("SELECT * FROM products");
//     res.json({ message: "Products fetched successfully", data: rows });
//   } catch (error) {
//     console.error("Error fetching products:", (error as Error).message);
//     res.status(500).json({
//       success: false,
//       message: "Error fetching products",
//       error: (error as Error).message,
//     });
//   }
// });
// Routes
app.use("/api/contact", contact_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
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
