import { addProduct, getAllProduct ,getProductById} from "./product.service";
const express = require("express");
const router = express.Router();

// POST route to create a product
router.post("/", async (req: any, res: any) => {
  const payload = req.body;
  const result = await addProduct(payload);
  res.status(201).json(result);
});

router.get("/", async (req: any, res: any) => {
  const response = await getAllProduct();
  res.status(200).json(response);
});
router.get("/:id", async (req: any, res: any) => {
  const id = req.params.id;
  const response = await getProductById(id);
  res.status(200).json(response);
});

// router.put("/:id", async (req: any, res: any) => {
//   const id = req.params.id;
//   const payload = req.body;
//   const result = await up(id, payload);
//   res.status(200).json(result);
// });

// router.delete("/:id", async (req: any, res: any) => {
//   const id = req.params.id;
//   await deleteServicesById(id);
//   res.status(200).json("Deleted successfully");
// });









module.exports = router;
