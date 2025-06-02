import { getAllSubjects } from "../../controllers/subjectControllers/getAllSubject.js";

export const getAllSubjectService = async (req, res) => {
  try {
    const subjects = await getAllSubjects();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};
