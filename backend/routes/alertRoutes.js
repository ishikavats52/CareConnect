import express from "express";
import { createAlert, getAlerts, updateAlertStatus } from "../controllers/alertController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createAlert);
router.get("/", authMiddleware, getAlerts);
router.patch("/:id", authMiddleware, updateAlertStatus);

export default router;
