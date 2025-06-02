import { teacher } from "../../database/db.js";

export const getAllTeachers = async() =>{
    try {
        const teachers = await teacher.findAll();
        return teachers;
    } catch (error) {
        console.log(error?.message || error);
    }
};



