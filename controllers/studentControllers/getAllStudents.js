import { student } from "../../database/db.js";

export const getAllStudents = async() =>{
    try {
        const students = await student.findAll();
        return students;
    } catch (error) {
        console.log(error?.message || error);
    }
};

