import express from "express";
const router = express.Router();
import ProductController from "./productController.js";
//import  } from "../auth/auth.services.js";

router.get("/", ProductController.getAll);


export default router;