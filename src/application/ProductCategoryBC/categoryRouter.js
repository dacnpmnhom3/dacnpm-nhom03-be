import express from "express";

const router = express.Router();

// Get
router.get("/", async (req, res) => {
  res.send("Category!");
});

export default router;
