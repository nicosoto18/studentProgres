import { student_subject } from "../../database/db.js";

export const getAllStudentSubjects = async() =>{
    try {
        const studentSubjects = await student_subject.findAll();
        return studentSubjects;
    } catch (error) {
        console.log(error?.message || error);
    }
};

