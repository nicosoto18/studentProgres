import {updateGrade} from "../../controllers/gradeControlles/updateGrade.js"

export const updateGradeService = async (req, res) => {
  try {
    const { id_grade } = req.params;
    const data = req.body;
    await updateGrade(newDataGrade);
    return res.status(200);
  } catch (error) {
    return res
      .status(500)
      .json({
        error: error.message || "Se produjo un error al actualizar el estudiante",
      });
  }
};
