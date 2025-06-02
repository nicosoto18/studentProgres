import { grade } from "../../database/db.js";

export const createGrade = async(data)=>{
    try {
       
        const {id_subject, id_student, type, date_grade, total_points, points_obtained, description} = data;
        if(id_subject == undefined || id_student == undefined || type == undefined || date_grade == undefined || total_points== undefined || points_obtained== undefined){
            throw new Error("Por favor, completa todos los campos");
        }

        const newGrade = await grade.create(data);
        return newGrade; 
    } catch (error) {
        console.log(error?.message || error);
    }
};

