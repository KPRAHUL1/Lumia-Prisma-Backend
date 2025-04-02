import { db } from "../../shared/lib/db";

// Create Staff
export async function createStaff(name: string, email: string) {
  return await db.staff.create({ data: { name, email } });
}

// Get All Staffs
export async function getAllStaffs() {
  return await db.staff.findMany({ include: { subjects: true } });
}

// Get Staff by ID
export async function getStaffById(id: string) {
  return await db.staff.findUnique({ where: { id }, include: { subjects: true } });
}

// Update Staff
export async function updateStaff(id: string, name: string) {
  return await db.staff.update({ where: { id }, data: { name } });
}

// Delete Staff
export async function deleteStaff(id: string) {
  return await db.staff.delete({ where: { id } });
}
