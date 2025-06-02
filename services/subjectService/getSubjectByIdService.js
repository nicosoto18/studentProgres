import { getSubjectById } from "../../controllers/subjectControllers/getSubjectById.js";

export const getSubjectByIdService = async (req, res) => {
  try {
    const {id} = req.params;
    const subject = await getSubjectById(id);
    res.status(200).json(subject);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};



