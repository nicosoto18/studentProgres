import { getAllTeachers } from "../../controllers/teacherControllers/getAllTeachers.js";

export const getAllTeachersService = async (req, res) => {
  try {
    const teachers = await getAllTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(400).json({ error: error?.message || error });
  }
};

