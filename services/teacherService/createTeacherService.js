import { createTeacher } from "../../controllers/teacherControllers/createTeacher.js";

export const createTeacherService = async (req,res)=>{
    try {
        const data = req.body;
        const newTeacher = await createTeacher(data);
        return res.status(200).json(newTeacher);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};