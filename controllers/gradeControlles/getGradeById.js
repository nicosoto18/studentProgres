import { grade } from "../../database/db.js";

export const getGradeById= async(id) =>{
    try {
        const wantedGrade = await grade.findByPk(id);
        return wantedGrade;
    } catch (error) {
        console.log(error?.message || error);
    }
};



