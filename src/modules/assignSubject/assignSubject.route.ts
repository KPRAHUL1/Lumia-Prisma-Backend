import express from "express";
import {
  createSubject,
  getAllSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
  assignSubjectToStaff,
} from "././assignSubject.service";

const router = express.Router();

/**
 * @route POST /api/subjects
 * Create a new subject
 */
router.post("/create", async (req:any, res:any) => {
    try {
      const { name } = req.body;
      if (!name || name.trim() === "") {
        return res.status(400).json({ error: "Subject name is required" });
      }
  
      const subject = await createSubject(name);
      res.status(201).json(subject);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

/**
 * @route GET /api/subjects
 * Get all subjects
 */
router.get("/", async (_req, res) => {
  const subjects = await getAllSubjects();
  res.json(subjects);
});

/**
 * @route GET /api/subjects/:id
 * Get subject by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const subject = await getSubjectById(req.params.id);
    res.json(subject);
  } catch (error) {
    res.status(404).json({ error: "Subject not found" });
  }
});

/**
 * @route PUT /api/subjects/:id
 * Update subject name
 */
router.put("/:id", async (req, res) => {
  try {
    const updatedSubject = await updateSubject(req.params.id, req.body.name);
    res.json(updatedSubject);
  } catch (error) {
    res.status(400).json({ error: "Could not update subject" });
  }
});

/**
 * @route DELETE /api/subjects/:id
 * Delete a subject
 */
router.delete("/:id", async (req, res) => {
  try {
    await deleteSubject(req.params.id);
    res.json({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Could not delete subject" });
  }
});

/**
 * @route POST /api/subjects/assign
 * Assign a subject to a staff member
 */
router.post("/assign", async (req, res) => {
  const { staffId, subjectId } = req.body;

  try {
    const assignment = await assignSubjectToStaff(staffId, subjectId);
    res.status(201).json(assignment);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
