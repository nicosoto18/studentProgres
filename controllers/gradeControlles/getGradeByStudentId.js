import { grade } from "../../database/db.js";

export const getGradeByStudentId= async(id_student) =>{
    try {
        const grades = await grade.findAll({
            where: {id_student}
        });
        return grades;
    } catch (error) {
        console.log(error?.message || error);
    }
};

