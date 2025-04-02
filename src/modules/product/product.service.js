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
exports.addProduct = addProduct;
exports.getAllProduct = getAllProduct;
exports.getProductById = getProductById;
const db_1 = require("../../shared/lib/db");
// Add a new product
function addProduct(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Received payload:", payload);
        const productData = {
            name: payload.name,
            description: payload.description,
            price: parseFloat(payload.price),
            stock: parseInt(payload.stock, 10),
            imageUrls: payload.imageUrls || [],
            categoryId: payload.categoryId,
            seasonId: payload.seasonId || null,
            brandId: payload.brandId || null,
            subscription: payload.subscription || false,
            colors: payload.colors || [],
            materials: payload.materials || [],
            sizes: payload.sizes || [],
        };
        try {
            return yield db_1.db.product.create({ data: productData });
        }
        catch (error) {
            console.error("Error creating product:", error);
            throw error;
        }
    });
}
// Fetch all products with an optional filter
function getAllProduct() {
    return __awaiter(this, arguments, void 0, function* (filter = {}) {
        try {
            return yield db_1.db.product.findMany({
                where: filter,
                include: {
                    category: true,
                    season: true,
                    brand: true,
                    reviews: true,
                    orderItems: true
                },
            });
        }
        catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    });
}
function getProductById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return db_1.db.product.findFirst({
            where: {
                id: id,
            },
            include: {
                category: true,
                brand: true,
                season: true
            }
        });
    });
}
