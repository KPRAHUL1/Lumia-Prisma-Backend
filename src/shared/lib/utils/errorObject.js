"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorObj = void 0;
const sendErrorObj = (res, code, message) => {
    res.status(500).json({ errorCode: code, errorMessage: message });
};
exports.sendErrorObj = sendErrorObj;
