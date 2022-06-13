import express from "express";
import CartService from "../../domain/Cart/CartService";

const router = express.Router();

// UPDATE
router.put("/:id", async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  const result = await CartService.update(id, data);

  res.status(result.statusCode).json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await CartService.get(id);

  res.status(result.statusCode).json(result);
});

export default router;
