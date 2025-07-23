import { Router } from "express";
import { sendEmail } from "../controllers/contactController";

const router = Router();

router.post("/", sendEmail);

export default router;
