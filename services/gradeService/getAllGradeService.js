import { getAllGrade } from "../../controllers/gradeControlles/getAllGrade.js";

export const getAllGradeService = async (req, res) => {
  try {
    const grades = await getAllGrade();
    res.status(200).json(grades);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};


