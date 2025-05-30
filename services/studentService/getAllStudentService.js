import { getAllStudents } from "../../controllers/studentControllers/getAllStudents.js";

export const getAllStudentService = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};


