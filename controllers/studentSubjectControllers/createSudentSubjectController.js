import { student_subject } from "../../database/db.js";

export const createStudentSubject = async(data)=>{
    try {
       
        const {id_student, id_subject} = data;
        if(id_student== undefined || id_subject == undefined){
            throw new Error("Por favor, completa todos los campos");
        }

        const newStudentSubject = await student_subject.create(data);
        return newStudentSubject; 
    } catch (error) {
        console.log(error?.message || error);
    }
};

