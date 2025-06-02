import { subject } from "../../database/db.js";

export const getAllSubjects = async() =>{
    try {
        const subjects = await subject.findAll();
        return subjects;
    } catch (error) {
        console.log(error?.message || error);
    }
};



