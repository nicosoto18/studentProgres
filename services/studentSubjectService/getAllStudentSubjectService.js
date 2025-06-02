import { getAllStudentSubjects } from "../../controllers/studentSubjectControllers/getAllStudentSubject.js";

export const getAllStudentSubjectService = async (req, res) => {
  try {
    const studentSubjects = await getAllStudentSubjects();
    res.status(200).json(studentSubjects);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};
