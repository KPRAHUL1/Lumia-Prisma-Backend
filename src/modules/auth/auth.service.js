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
exports.userSignUp = userSignUp;
exports.userLogin = userLogin;
exports.changeUserPassword = changeUserPassword;
const db_1 = require("../../shared/lib/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client"); // Import Prisma Enum
dotenv_1.default.config();
function userSignUp(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const saltRounds = parseInt(process.env.PASSWORD_HASH_KEY || "10");
        const hashedPassword = yield bcrypt_1.default.hash(payload.password, saltRounds);
        const role = Object.values(client_1.UserRole).includes(payload.role)
            ? payload.role
            : client_1.UserRole.User;
        return yield db_1.db.user.create({
            data: {
                name: payload.name,
                email: payload.email,
                username: payload.username,
                password: hashedPassword,
                image: payload.image,
                phoneNumber: payload.phoneNumber,
                role: role,
            },
        });
    });
}
function userLogin(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield db_1.db.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new Error("User not found");
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }
        return user;
    });
}
function changeUserPassword(email, currentPassword, newPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield db_1.db.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error("User not found");
        }
        const isPasswordValid = yield bcrypt_1.default.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            throw new Error("Current password is incorrect");
        }
        const saltRounds = parseInt(process.env.PASSWORD_HASH_KEY || "10");
        const hashedNewPassword = yield bcrypt_1.default.hash(newPassword, saltRounds);
        yield db_1.db.user.update({
            where: { email },
            data: { password: hashedNewPassword },
        });
    });
}
