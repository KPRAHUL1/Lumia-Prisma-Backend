import express from "express";
import { userLogin, userSignUp, changeUserPassword } from "./auth.service";
import { db } from "../../shared/lib/db";

const router = express.Router();

router.post("/register", async (req, res) => {
  const payload = req.body;
  const user = await userSignUp(payload);
  res.status(201).json({ message: "User registered successfully", user });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userLogin(email, password);
  res.status(200).json({ message: "Login successful", user });
});

router.put("/change-password", async (req, res) => {
    const { email, currentPassword, newPassword } = req.body;
    await changeUserPassword(email, currentPassword, newPassword);
    res.status(200).json({ message: "Password changed successfully" });
  });
  

router.get("/users", async (req, res) => {
  const users = await db.user.findMany({
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
});

module.exports = router;
