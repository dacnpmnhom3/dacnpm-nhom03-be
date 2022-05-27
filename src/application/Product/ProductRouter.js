import express from "express";
const router = express.Router();
import ProductController from "./productController.js";
//import  } from "../auth/auth.services.js";

router.get("/", ProductController.getAll);
router.get("/test", ProductController.test);
router.get("/:id", ProductController.get);
router.post("/", ProductController.insert);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);
router.delete("/hard/:id", ProductController.hardDelete);

export default router;