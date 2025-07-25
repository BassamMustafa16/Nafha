"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisePool = exports.pool = void 0;
exports.testDatabaseConnection = testDatabaseConnection;
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create connection pool for better performance
const pool = mysql2_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || "3306"),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
exports.pool = pool;
// Create promise-based connection
const promisePool = pool.promise();
exports.promisePool = promisePool;
// Test connection
function testDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield promisePool.getConnection();
            console.log("✅ Connected to MySQL database successfully!");
            connection.release();
        }
        catch (error) {
            console.error("❌ Error connecting to MySQL database:", error.message);
        }
    });
}
