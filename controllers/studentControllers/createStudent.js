import { student, student_subject } from "../../database/db.js";

export const createStudent = async(data)=>{
    try {
       
        const {name, lastname, id_subject} = data;
        if(name == undefined || lastname == undefined || id_subject==undefined){
            throw new Error("Por favor, completa todos los campos");
        }

        const newStudent = await student.create({name, lastname});
        const id_student = newStudent.id_student;

         const studentSubjectLink = await student_subject.create({
            id_student: id_student,
            id_subject: id_subject
        });

        return {
            student: newStudent,
            subjectLink: studentSubjectLink
        };
    } catch (error) {
        console.log(error?.message || error);
    }
};

