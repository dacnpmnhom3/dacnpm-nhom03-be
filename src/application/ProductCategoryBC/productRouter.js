import express from "express";
import ProductService from "../../domain/ProductCategoryBC/Product/product.service";

const router = express.Router();

// UPDATE
router.put("/:id", async (req, res) => {
  const data = req.body;
  const result = await ProductService.update(data);

  res.status(result.statusCode).json(result);
});

export default router;
