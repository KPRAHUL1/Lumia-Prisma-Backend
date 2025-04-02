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
const staff_sevice_1 = require("./staff.sevice");
const router = (0, express_1.Router)();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const staff = yield (0, staff_sevice_1.createStaff)(name, email);
    res.json(staff);
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staffs = yield (0, staff_sevice_1.getAllStaffs)();
    res.json(staffs);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield (0, staff_sevice_1.getStaffById)(req.params.id);
    res.json(staff);
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield (0, staff_sevice_1.updateStaff)(req.params.id, req.body.name);
    res.json(staff);
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield (0, staff_sevice_1.deleteStaff)(req.params.id);
    res.json({ message: "Staff deleted", staff });
}));
module.exports = router;
