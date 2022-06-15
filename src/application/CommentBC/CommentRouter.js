import express from "express";
import commentController from "./CommentController";
import commentService from "../../domain/CommentBC/CommentService";

const router = express.Router();

router.get("/", commentController.getAll);
router.post("/", commentController.insert);
router.get("/product/id/:id", commentController.findByProductId);
router.get("/user/id/:id", commentController.findByUserId);
router.get("/userinfo/comment/:id", commentController.findOwnerInfoByCommentId);
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await commentService.update(id, data);
  return res.status(result.statusCode).json(result.data);
});

export default router;
