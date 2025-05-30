// auth.service.ts
import { db } from "../../shared/lib/db";
import bcrypt from "bcrypt";
import { CreateUserModel } from "../../shared/lib/models/userModel";
import dotenv from "dotenv";
import { UserRole } from "@prisma/client";
import { getUserContext } from "../../shared/lib/async-context";
dotenv.config();

export async function userSignUp(payload: CreateUserModel): Promise<any> {
  const saltRounds = parseInt(process.env.PASSWORD_HASH_KEY || "10");
  const hashedPassword = await bcrypt.hash(payload.password, saltRounds);

  const role = Object.values(UserRole).includes(payload.role as UserRole)
    ? (payload.role as UserRole)
    : UserRole.User;

  return await db.user.create({
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
}

export async function userLogin(email: string, password: string): Promise<any> {
  const user = await db.user.findUnique({ where: { email } });

  if (!user) throw new Error("User not found");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid password");

  // Example: log context after successful login
  const ctx = getUserContext();
  console.log(`[Login] User Context: Email: ${ctx?.email}, UserID: ${ctx?.userId}`);

  return user;
}

export async function changeUserPassword(
  email: string,
  currentPassword: string,
  newPassword: string
): Promise<void> {
  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
  if (!isPasswordValid) {
    throw new Error("Current password is incorrect");
  }

  const saltRounds = parseInt(process.env.PASSWORD_HASH_KEY || "10");
  const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

  await db.user.update({
    where: { email },
    data: { password: hashedNewPassword },
  });
}
