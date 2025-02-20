import { addBrand, getAllBrand } from "./brand.service";

const express=require("express")
const router = express.Router();

router.post("/", async (req: any, res: any) => {
    const payload = req.body;
    const result = await addBrand(payload);
    res.status(201).json(result);
  });
  
  router.get("/", async (req: any, res: any) => {
    const response = await getAllBrand();
    res.status(200).json(response);
  });
  module.exports = router;