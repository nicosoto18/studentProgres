import { createStudent } from "../../controllers/studentControllers/createStudent.js"

export const createStudentService = async (req,res)=>{
    try {
        const data = req.body;
        const newStudent = await createStudent(data);
        return res.status(200).json(newStudent);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};