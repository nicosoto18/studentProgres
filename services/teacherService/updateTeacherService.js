import { updateTeacher } from "../../controllers/teacherControllers/updateTeacher.js";

export const updateTeacherService = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const newDataTeacher = { ...data, id };
    await updateTeacher(newDataTeacher);
    return res.status(200).json({ newDataTeacher });
  } catch (error) {
    return res
      .status(500)
      .json({
        error: error.message || "Se produjo un error al actualizar el estudiante",
      });
  }
};
