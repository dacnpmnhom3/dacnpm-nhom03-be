import express from "express";
const router = express.Router();
import commentController from "./commentController.js";
import { authenticateByJwt } from "../auth/auth.services.js";

router.get("/:productId", commentController.getAll);
router.post("/", authenticateByJwt ,commentController.insert);

export default router;
