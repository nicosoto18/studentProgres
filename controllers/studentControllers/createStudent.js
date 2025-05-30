import { student } from "../../database/db.js";

export const createStudent = async(data)=>{
    try {
       
        const {name, lastname} = data;
        if(name == undefined || lastname == undefined){
            throw new Error("Por favor, completa todos los campos");
        }

        const newStudent = await student.create(data);
        return newStudent; 
    } catch (error) {
        console.log(error?.message || error);
    }
};

