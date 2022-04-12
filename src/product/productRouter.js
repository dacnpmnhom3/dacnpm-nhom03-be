import express from "express";
const router = express.Router();
import ProductController from "./productController";
import { authenticateByJwt } from "../auth/auth.services";

router.get("/", ProductController.getAll);
router.get("/test", authenticateByJwt, ProductController.test);
router.get("/:id", ProductController.get);
router.post("/", ProductController.insert);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);
router.delete("/hard/:id", ProductController.hardDelete);

export default router;
