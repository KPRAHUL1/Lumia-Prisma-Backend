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
exports.addBrand = addBrand;
exports.getAllBrand = getAllBrand;
const db_1 = require("../../shared/lib/db");
function addBrand(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.brand.create({
            data: {
                name: payload.name,
                imageUrl: payload.imageUrl
            }
        });
    });
}
function getAllBrand() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.db.brand.findMany({});
    });
}
