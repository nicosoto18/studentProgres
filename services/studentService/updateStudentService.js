import {updateStudent} from "../../controllers/studentControllers/updateStudent.js";

export const updateStudentService = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const newDataStudent = { ...data, id };
    await updateStudent(newDataStudent);
    return res.status(200).json({ newDataStudent });
  } catch (error) {
    return res
      .status(500)
      .json({
        error: error.message || "Se produjo un error al actualizar el estudiante",
      });
  }
};
