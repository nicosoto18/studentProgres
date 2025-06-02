import { getProgresStudent } from "../../controllers/studentControllers/getProgresStudent.js";

export const getProgresStudentService = async (req, res) => {
  try {
    const {id_student, id_subject} = req.params;
    const progres = await getProgresStudent(id_student, id_subject);
    res.json({id_student, id_subject, progres});
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};

