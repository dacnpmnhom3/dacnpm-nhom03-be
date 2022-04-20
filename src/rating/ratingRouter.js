import express from "express";
const router = express.Router();
import RatingController from "./RatingController";
import { authenticateByJwt } from "../auth/auth.services";

router.get("/", RatingController.getAll);
router.get("/test", ProductController.test);
router.post("/", authenticateByJwt, RatingController.insert);

export default router;
