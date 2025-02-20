import { addCategory, deleteAllCategories, getAllCategory, getCategoryById, updateCategory } from "./category.service";

 const express = require("express");
 const router = express.Router();

// POST route to create a category
router.post("/", async (req:any, res:any) => {
  try {
    const result = await addCategory(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to fetch all categories
router.get("/", async (req:any, res:any) => {
  try {
    const categories = await getAllCategory();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT route to update a category by ID
router.put("/:id", async (req:any, res:any) => {
  try {
    const result = await updateCategory(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE route to delete a category by ID
router.delete("/:id", async (req:any, res:any) => {
  try {
    await deleteAllCategories(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/:id", async (req: any, res: any) => {
  const id = req.params.id;
  const response = await getCategoryById(id);
  res.status(200).json(response);
});
module.exports = router;

