import express from "express";
import upload from "../../helper/file/FileUpload.js";
import sellerController from "./sellerController.js";
import SellerValidation from "./sellerValidate.js";
const router = express.Router();

router.post("/login", sellerController.handleLogin);

router.get("/", sellerController.getAll);
router.post("/", SellerValidation.registerValidation, sellerController.createASeller);
router.get("/:id", sellerController.get);
router.post("/test", sellerController.test);
router.post("/upload", upload.single("file"), sellerController.upload);
router.post(
  "/upload-video",
  upload.single("file"),
  sellerController.uploadVideo
);

export default router;
