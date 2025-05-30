"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authContextMiddleware = authContextMiddleware;
// shared/middleware/auth-context.ts
const async_context_1 = require("../async-context");
// Middleware to track user context based on incoming request
function authContextMiddleware(req, res, next) {
    const userId = req.headers['x-user-id'] || "anonymous";
    const email = req.headers['x-user-email'] || "unknown@example.com";
    // Set the context for the incoming request
    async_context_1.asyncLocalStorage.run({ userId, email }, () => {
        next();
    });
}
