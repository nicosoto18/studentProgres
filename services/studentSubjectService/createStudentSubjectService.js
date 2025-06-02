import { createStudentSubject } from "../../controllers/studentSubjectControllers/createSudentSubjectController.js";

export const createStudentSubjectService = async (req,res)=>{
    try {
        const data = req.body;
        const newStudentSubject = await createStudentSubject(data);
        return res.status(200).json(newStudentSubject);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

