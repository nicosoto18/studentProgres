import {getGradeByStudentId} from "../../controllers/gradeControlles/getGradeByStudentId.js"

export const getGradeByStudentIdService = async (req, res) => {
  try {
    const {id_student} = req.params;
    const grades = await getGradeByStudentId(id_student);
    res.status(200).json(grades);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};

