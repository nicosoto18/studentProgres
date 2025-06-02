import { createGrade } from "../../controllers/gradeControlles/createGrade.js";

export const createGradeService = async (req,res)=>{
    try {
        const data = req.body;
        const newGrade = await createGrade(data);
        return res.status(200).json(newGrade);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

