import { Router } from "express";
import { createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject } from "./subject.sevice";

const router = Router();

router.post("/", async (req, res) => {
  const { name } = req.body;
  const subject = await createSubject(name);
  res.json(subject);
});

router.get("/", async (req, res) => {
  const subjects = await getAllSubjects();
  res.json(subjects);
});

router.get("/:id", async (req, res) => {
  const subject = await getSubjectById(req.params.id);
  res.json(subject);
});

router.put("/:id", async (req, res) => {
  const subject = await updateSubject(req.params.id, req.body.name);
  res.json(subject);
});

router.delete("/:id", async (req, res) => {
  const subject = await deleteSubject(req.params.id);
  res.json({ message: "Subject deleted", subject });
});

module.exports = router;
