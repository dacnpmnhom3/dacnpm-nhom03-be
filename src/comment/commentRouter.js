import express from "express";
const router = express.Router();
import CommentController from "./commentController";
import { authenticateByJwt } from "../auth/auth.services";

router.get("/", CommentController.getAll);
router.get("/test", ProductController.test);
router.post("/", authenticateByJwt, CommentController.insert);

export default router;
