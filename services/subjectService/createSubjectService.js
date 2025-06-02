import { createSubject } from "../../controllers/subjectControllers/createSubject.js";

export const createSubjectService = async (req,res)=>{
    try {
        const data = req.body;
        const newSubject = await createSubject(data);
        return res.status(200).json(newSubject);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

