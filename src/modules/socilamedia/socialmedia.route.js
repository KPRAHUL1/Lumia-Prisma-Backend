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
const socialmedia_service_1 = require("./socialmedia.service");
const express = require('express');
const router = express.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield (0, socialmedia_service_1.addSocialMedia)(payload);
    res.status(201).json(result);
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, socialmedia_service_1.getAllSocialMedia)();
    res.status(200).json(response);
}));
module.exports = router;
