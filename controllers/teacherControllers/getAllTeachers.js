import { teacher } from "../../database/db.js";

export const getAllTeachers = async() =>{
    try {
        const teachers = await teachers.findAll();
        return teachers;
    } catch (error) {
        console.log(error?.message || error);
    }
};



