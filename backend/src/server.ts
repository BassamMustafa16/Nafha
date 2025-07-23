import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import { testDatabaseConnection } from "./db";
import dotenv from "dotenv";
import { promisePool } from "./db";

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

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

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

// Import routes
// import userRoutes from './routes/users';
// app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message,
  });
});

// Sending Mail
app.post(
  "/api/contact",
  async (req: Request<{}, {}, ContactFormData>, res: Response) => {
    try {
      const { name, email, message } = req.body;

      // Validation
      if (!name?.trim() || !email?.trim() || !message?.trim()) {
        res.status(400).json({
          success: false,
          message: "All fields are required",
        });
        return;
      }

      // Create transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "bassam16597@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 3px; border-left: 4px solid #007cba;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `,
        replyTo: email,
      };

      await transporter.sendMail(mailOptions);

      res.json({
        success: true,
        message: "Email sent successfully",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send email",
      });
    }
  }
);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
