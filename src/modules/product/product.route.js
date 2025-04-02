"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
const express = require("express");
const router = express.Router();
// POST route to create a product
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield (0, product_service_1.addProduct)(payload);
    res.status(201).json(result);
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, product_service_1.getAllProduct)();
    res.status(200).json(response);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const response = yield (0, product_service_1.getProductById)(id);
    res.status(200).json(response);
}));
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
