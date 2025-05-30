// shared/middleware/auth-context.ts
import { asyncLocalStorage } from "../async-context";
import { Request, Response, NextFunction } from "express";

// Middleware to track user context based on incoming request
export function authContextMiddleware(req: Request, res: Response, next: NextFunction) {
  const userId = req.headers['x-user-id'] as string || "anonymous";
  const email = req.headers['x-user-email'] as string || "unknown@example.com";

  // Set the context for the incoming request
  asyncLocalStorage.run({ userId, email }, () => {
    next();
  });
}
