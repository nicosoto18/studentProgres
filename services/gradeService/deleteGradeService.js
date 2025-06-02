import {deleteGrade} from "../../controllers/gradeControlles/deleteGrade.js"

export const deleteGradeService = async (req, res) => {
  try {
    const {id_grade} = req.params;
    await deleteGrade(id_grade);
    res.status(200).json({success: true});
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};



