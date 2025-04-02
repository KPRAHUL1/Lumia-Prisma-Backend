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
const express_1 = require("express");
const subject_sevice_1 = require("./subject.sevice");
const router = (0, express_1.Router)();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const subject = yield (0, subject_sevice_1.createSubject)(name);
    res.json(subject);
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subjects = yield (0, subject_sevice_1.getAllSubjects)();
    res.json(subjects);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subject = yield (0, subject_sevice_1.getSubjectById)(req.params.id);
    res.json(subject);
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subject = yield (0, subject_sevice_1.updateSubject)(req.params.id, req.body.name);
    res.json(subject);
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subject = yield (0, subject_sevice_1.deleteSubject)(req.params.id);
    res.json({ message: "Subject deleted", subject });
}));
module.exports = router;
