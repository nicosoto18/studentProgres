import {getStudentById} from "../../controllers/studentControllers/getStudentById.js";

export const getStudentByIdService = async (req, res) => {
  try {
    const {id} = req.params;
    const student = await getStudentById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};





