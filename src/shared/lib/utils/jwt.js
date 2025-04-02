"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.generateJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorObject_1 = require("./errorObject");
const customErrorCode_1 = require("./customErrorCode");
dotenv_1.default.config();
const generateJwtToken = (payload) => {
    const secretKey = process.env.JWT_SECRET_KEY || "Lumia_2024_by_lumia@2024";
    const options = {
        expiresIn: '10h',
    };
    return jsonwebtoken_1.default.sign(payload, secretKey, options);
};
exports.generateJwtToken = generateJwtToken;
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization ? req.headers.authorization : req.query.token;
    if (!authHeader) {
        (0, errorObject_1.sendErrorObj)(res, customErrorCode_1.token_err, "Token Not Found!");
    }
    else {
        const token = authHeader && authHeader.split(" ")[1];
        if (token == null) {
            (0, errorObject_1.sendErrorObj)(res, customErrorCode_1.token_err, "Token Not Found!");
        }
        else {
            jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY || "Lumia_2024_by_lumia@2024", (err, user) => {
                if (err) {
                    (0, errorObject_1.sendErrorObj)(res, customErrorCode_1.token_err, err);
                }
                req.user = user;
                if (Date.now() >= user.exp * 1000) {
                    (0, errorObject_1.sendErrorObj)(res, 'TOKEN_EXP', "Token Expired!");
                }
                else {
                    next();
                }
            });
        }
    }
};
exports.authenticateToken = authenticateToken;
