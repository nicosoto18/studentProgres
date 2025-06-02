import { grade } from "../../database/db.js";

export const getAllGrade = async() =>{
    try {
        const grades = await grade.findAll();
        return grades;
    } catch (error) {
        console.log(error?.message || error);
    }
};



