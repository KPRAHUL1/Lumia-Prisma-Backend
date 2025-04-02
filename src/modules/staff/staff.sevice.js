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
exports.createStaff = createStaff;
exports.getAllStaffs = getAllStaffs;
exports.getStaffById = getStaffById;
exports.updateStaff = updateStaff;
exports.deleteStaff = deleteStaff;
const db_1 = require("../../shared/lib/db");
// Create Staff
function createStaff(name, email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.staff.create({ data: { name, email } });
    });
}
// Get All Staffs
function getAllStaffs() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.staff.findMany({ include: { subjects: true } });
    });
}
// Get Staff by ID
function getStaffById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.staff.findUnique({ where: { id }, include: { subjects: true } });
    });
}
// Update Staff
function updateStaff(id, name) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.staff.update({ where: { id }, data: { name } });
    });
}
// Delete Staff
function deleteStaff(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.staff.delete({ where: { id } });
    });
}
