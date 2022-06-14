import express from "express";
import categoryService from "../../domain/ProductCategoryBC/Category/CategoryService";

const router = express.Router();

// Get
router.get("/", async (req, res) => {
  const result = await categoryService.getCategories();

  res.status(result.statusCode).json(result);
});

export default router;
