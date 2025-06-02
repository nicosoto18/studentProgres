import { getGradeById } from "../../controllers/gradeControlles/getGradeById.js";

export const getGradeByIdService = async (req, res) => {
  try {
    const {id_grade} = req.params;
    const grade = await getGradeById(id_grade);
    res.status(200).json(grade);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};







