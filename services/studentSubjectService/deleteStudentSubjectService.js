import { deleteStudentSubject } from "../../controllers/studentSubjectControllers/deleteStudentSubject.js";

export const deleteStudentSubjectService = async (req, res) => {
  try {
    const {id} = req.params;
    await deleteStudentSubject(id);
    res.status(200).json({success: true});
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};




