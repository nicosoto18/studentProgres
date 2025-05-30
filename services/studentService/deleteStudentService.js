import {deleteStudent} from "../../controllers/studentControllers/deleteStudent.js";

export const deleteStudentService = async (req, res) => {
  try {
    const {id} = req.params;
    await deleteStudent(id);
    res.status(200).json({success: true});
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};




