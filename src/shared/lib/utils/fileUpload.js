"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const maxSize = 2 * 1024 * 1024;
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filePath = file.fieldname + '-' + uniqueSuffix + path_1.default.extname(file.originalname);
        cb(null, filePath);
    }
});
const uploadFile = (fieldName) => {
    return (0, multer_1.default)({ storage: storage, limits: { fileSize: maxSize } }).single(fieldName);
};
const uploadFileMiddleware = (req, res, fieldName) => {
    return new Promise((resolve, reject) => {
        const upload = uploadFile(fieldName);
        upload(req, res, (err) => {
            var _a;
            if (err) {
                reject(err);
            }
            else {
                resolve((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
            }
        });
    });
};
exports.uploadFileMiddleware = uploadFileMiddleware;
