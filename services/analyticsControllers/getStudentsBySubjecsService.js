import { getStudentsBySubject } from "../../controllers/analyticsController/getStudentsBySubject.js";

export const getStudentsBySubjectsService = async (req, res) => {
  try {
    const { id_subject } = req.params;
    const data = await getStudentsBySubject(id_subject);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};


