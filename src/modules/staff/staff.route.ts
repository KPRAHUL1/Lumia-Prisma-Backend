import { Router } from "express";
import { createStaff, getAllStaffs, getStaffById, updateStaff, deleteStaff } from "./staff.sevice";

const router = Router();

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const staff = await createStaff(name, email);
  res.json(staff);
});

router.get("/", async (req, res) => {
  const staffs = await getAllStaffs();
  res.json(staffs);
});

router.get("/:id", async (req, res) => {
  const staff = await getStaffById(req.params.id);
  res.json(staff);
});

router.put("/:id", async (req, res) => {
  const staff = await updateStaff(req.params.id, req.body.name);
  res.json(staff);
});

router.delete("/:id", async (req, res) => {
  const staff = await deleteStaff(req.params.id);
  res.json({ message: "Staff deleted", staff });
});

module.exports = router;
