import { addSeason, getAllSeasons } from "./season.service";
import { Request, Response } from "express"; // Import types for better type safety

const express = require('express');
const router = express.Router();

// POST route to create a season
router.post("/", async (req: Request, res: Response) => {
  const payload = req.body;

  // Optional: Validate that the name of the season is provided
  if (!payload.name) {
    return res.status(400).json({ error: "Season name is required" });
  }

  try {
    const result = await addSeason(payload);  // Call addSeason function
    res.status(201).json(result);  // Return the created season as a response
  } catch (error) {
    console.error("Error creating season:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to fetch all seasons
router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await getAllSeasons();  // Call getAllSeasons function
    res.status(200).json(response);  // Return all seasons as a response
  } catch (error) {
    console.error("Error fetching seasons:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
