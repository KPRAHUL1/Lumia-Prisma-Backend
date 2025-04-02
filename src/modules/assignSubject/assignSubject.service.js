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
exports.createSubject = createSubject;
exports.getAllSubjects = getAllSubjects;
exports.getSubjectById = getSubjectById;
exports.updateSubject = updateSubject;
exports.deleteSubject = deleteSubject;
exports.assignSubjectToStaff = assignSubjectToStaff;
const db_1 = require("../../shared/lib/db");
// Create Subject
function createSubject(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.subject.create({ data: { name } });
    });
}
// Get All Subjects
function getAllSubjects() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.subject.findMany({ include: { staff: true } });
    });
}
// Get Subject by ID
function getSubjectById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.subject.findUnique({ where: { id }, include: { staff: true } });
    });
}
// Update Subject
function updateSubject(id, name) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.subject.update({ where: { id }, data: { name } });
    });
}
// Delete Subject
function deleteSubject(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.subject.delete({ where: { id } });
    });
}
// Assign Subject to Staff
function assignSubjectToStaff(staffId, subjectId) {
    return __awaiter(this, void 0, void 0, function* () {
        // Check if the assignment already exists
        const existingAssignment = yield db_1.db.subjectAssignment.findFirst({
            where: { staffId, subjectId },
        });
        if (existingAssignment) {
            throw new Error("Subject already assigned to staff.");
        }
        // Create new assignment
        return yield db_1.db.subjectAssignment.create({ data: { staffId, subjectId } });
    });
}
