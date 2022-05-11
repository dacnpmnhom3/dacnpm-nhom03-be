import express from "express";
const router = express.Router();
import UserController from "./userController.js";
import { authenticateByJwt } from "../auth/auth.services.js";

router.post("/register", UserController.register);
router.post("/login", UserController.login)

router.get("/", UserController.getAll);
router.get("/:id", UserController.get);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;