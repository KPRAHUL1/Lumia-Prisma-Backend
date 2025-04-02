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
const season_service_1 = require("./season.service");
const express = require('express');
const router = express.Router();
// POST route to create a season
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    // Optional: Validate that the name of the season is provided
    if (!payload.name) {
        return res.status(400).json({ error: "Season name is required" });
    }
    try {
        const result = yield (0, season_service_1.addSeason)(payload); // Call addSeason function
        res.status(201).json(result); // Return the created season as a response
    }
    catch (error) {
        console.error("Error creating season:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
// GET route to fetch all seasons
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, season_service_1.getAllSeasons)(); // Call getAllSeasons function
        res.status(200).json(response); // Return all seasons as a response
    }
    catch (error) {
        console.error("Error fetching seasons:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
module.exports = router;
