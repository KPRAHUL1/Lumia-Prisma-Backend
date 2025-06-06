import { db } from "../../shared/lib/db";

// Create Subject
export async function createSubject(name: string) {
  return await db.subject.create({ data: { name } });
}

// Get All Subjects
export async function getAllSubjects() {
  return await db.subject.findMany({ include: { staff: true } });
}

// Get Subject by ID
export async function getSubjectById(id: string) {
  return await db.subject.findUnique({ where: { id }, include: { staff: true } });
}

// Update Subject
export async function updateSubject(id: string, name: string) {
  return await db.subject.update({ where: { id }, data: { name } });
}

// Delete Subject
export async function deleteSubject(id: string) {
  return await db.subject.delete({ where: { id } });
}
