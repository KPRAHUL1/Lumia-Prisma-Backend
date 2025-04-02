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
exports.addSeason = addSeason;
exports.getAllSeasons = getAllSeasons;
const db_1 = require("../../shared/lib/db");
// Function to add a new season
function addSeason(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.db.season.create({
                data: {
                    name: payload.name,
                },
            });
        }
        catch (error) {
            console.error("Error adding season:", error);
            throw new Error("Failed to add season");
        }
    });
}
// Function to get all seasons
function getAllSeasons() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.db.season.findMany();
        }
        catch (error) {
            console.error("Error fetching seasons:", error);
            throw new Error("Failed to fetch seasons");
        }
    });
}
