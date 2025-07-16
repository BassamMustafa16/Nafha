import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Create connection pool for better performance
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || "3306"),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Create promise-based connection
const promisePool = pool.promise();

// Test connection
async function testDatabaseConnection(): Promise<void> {
  try {
    const connection = await promisePool.getConnection();
    console.log("✅ Connected to MySQL database successfully!");
    connection.release();
  } catch (error) {
    console.error(
      "❌ Error connecting to MySQL database:",
      (error as Error).message
    );
  }
}

export { pool, promisePool, testDatabaseConnection };
