import { getTeacherById } from "../../controllers/teacherControllers/getTeacherById.js";

export const getTeacherByIdService = async (req, res) => {
  try {
    const {id} = req.params;
    const teacher = await getTeacherById(id);
    res.status(200).json(teacher);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};



