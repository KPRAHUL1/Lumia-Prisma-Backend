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
const auth_service_1 = require("./auth.service");
const db_1 = require("../../shared/lib/db");
const router = express_1.default.Router();
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const user = yield (0, auth_service_1.userSignUp)(payload);
    res.status(201).json({ message: "User registered successfully", user });
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield (0, auth_service_1.userLogin)(email, password);
    res.status(200).json({ message: "Login successful", user });
}));
router.put("/change-password", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, currentPassword, newPassword } = req.body;
    yield (0, auth_service_1.changeUserPassword)(email, currentPassword, newPassword);
    res.status(200).json({ message: "Password changed successfully" });
}));
router.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield db_1.db.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            username: true,
            password: true,
            phoneNumber: true,
            image: true,
            role: true,
        },
    });
    res.status(200).json(users);
}));
module.exports = router;
