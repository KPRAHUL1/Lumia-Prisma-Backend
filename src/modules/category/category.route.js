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
const category_service_1 = require("./category.service");
const express = require("express");
const router = express.Router();
// POST route to create a category
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, category_service_1.addCategory)(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
// GET route to fetch all categories
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield (0, category_service_1.getAllCategory)();
        res.status(200).json(categories);
    }
    catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
// PUT route to update a category by ID
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, category_service_1.updateCategory)(req.params.id, req.body);
        res.status(200).json(result);
    }
    catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
// DELETE route to delete a category by ID
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, category_service_1.deleteAllCategories)(req.params.id);
        res.status(200).json({ message: "Deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const response = yield (0, category_service_1.getCategoryById)(id);
    res.status(200).json(response);
}));
module.exports = router;
