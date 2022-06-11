import express from "express";
import ProductService from "../../domain/ProductCategoryBC/Product/productService";

const router = express.Router();

router.get("/pending-products", async (req, res) => {
  const result = await ProductService.getPendingProducts();

  res.status(result.statusCode).json(result);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  const result = await ProductService.update(id, data);

  res.status(result.statusCode).json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.get(id);

  res.status(result.statusCode).json(result);
});

export default router;
