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
exports.addCategory = addCategory;
exports.getAllCategory = getAllCategory;
exports.updateCategory = updateCategory;
exports.deleteAllCategories = deleteAllCategories;
exports.getCategoryById = getCategoryById;
const db_1 = require("../../shared/lib/db");
function addCategory(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.category.create({
            data: {
                name: payload.name,
                description: payload.description,
                imagePath: payload.imagePath
            },
        });
    });
}
function getAllCategory() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.category.findMany({});
    });
}
function updateCategory(id, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.category.update({
            where: { id: id },
            data: {
                name: payload.name,
                description: payload.description,
                imagePath: payload.imagePath,
            },
        });
    });
}
function deleteAllCategories(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.category.deleteMany();
    });
}
function getCategoryById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.category.findFirst({
            where: {
                id: id, // Ensure the ID is correct
            },
            include: {
                products: true, // Assuming 'products' relation exists
            }
        });
    });
}
