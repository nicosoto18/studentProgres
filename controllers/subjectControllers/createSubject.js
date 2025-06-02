import { subject } from "../../database/db.js";

export const createSubject = async(data)=>{
    try {
       
        const {subject_name, id_teacher} = data;
        if(subject_name == undefined || id_teacher == undefined ){
            throw new Error("Por favor, completa todos los campos");
        }

        const newSubject = await subject.create(data);
        return newSubject; 
    } catch (error) {
        console.log(error?.message || error);
    }
};

