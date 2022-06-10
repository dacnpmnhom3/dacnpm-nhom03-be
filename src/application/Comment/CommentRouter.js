import express from "express";
const router = express.Router();
import commentController from "./CommentController.js";

router.get("/", commentController.getAll);
router.post("/", commentController.insert);
router.get("/product/id/:id", commentController.findByProductId);
router.get("/user/id/:id", commentController.findByUserId);

export default router;
