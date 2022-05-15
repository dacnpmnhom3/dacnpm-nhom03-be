import express from "express";
import OrderService from "../../domain/OrderBC/OrderService";

const router = express.Router();

router.post("/create-order", async (req, res) => {
  const data = req.body;
  const result = await OrderService.createAnOrder(data);

  res.status(result.statusCode).json(result);
});

export default router;
