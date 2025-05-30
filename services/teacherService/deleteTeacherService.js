import { deleteTeacher } from "../../controllers/teacherControllers/deleteTeacher.js";

export const deleteTeacherService = async (req, res) => {
  try {
    const {id} = req.params;
    await deleteTeacher(id);
    res.status(200).json({success: true});
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};




