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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const assignSubject_service_1 = require("././assignSubject.service");
const router = express_1.default.Router();
/**
 * @route POST /api/subjects
 * Create a new subject
 */
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        if (!name || name.trim() === "") {
            return res.status(400).json({ error: "Subject name is required" });
        }
        const subject = yield (0, assignSubject_service_1.createSubject)(name);
        res.status(201).json(subject);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
/**
 * @route GET /api/subjects
 * Get all subjects
 */
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subjects = yield (0, assignSubject_service_1.getAllSubjects)();
    res.json(subjects);
}));
/**
 * @route GET /api/subjects/:id
 * Get subject by ID
 */
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subject = yield (0, assignSubject_service_1.getSubjectById)(req.params.id);
        res.json(subject);
    }
    catch (error) {
        res.status(404).json({ error: "Subject not found" });
    }
}));
/**
 * @route PUT /api/subjects/:id
 * Update subject name
 */
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedSubject = yield (0, assignSubject_service_1.updateSubject)(req.params.id, req.body.name);
        res.json(updatedSubject);
    }
    catch (error) {
        res.status(400).json({ error: "Could not update subject" });
    }
}));
/**
 * @route DELETE /api/subjects/:id
 * Delete a subject
 */
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, assignSubject_service_1.deleteSubject)(req.params.id);
        res.json({ message: "Subject deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ error: "Could not delete subject" });
    }
}));
/**
 * @route POST /api/subjects/assign
 * Assign a subject to a staff member
 */
router.post("/assign", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { staffId, subjectId } = req.body;
    try {
        const assignment = yield (0, assignSubject_service_1.assignSubjectToStaff)(staffId, subjectId);
        res.status(201).json(assignment);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
module.exports = router;
