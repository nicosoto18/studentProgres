import { teacher } from "../../database/db.js";

export const createTeacher = async(data)=>{
    try {
       
        const {name, lastname, email, password} = data;
        if(name == undefined || lastname == undefined || email ==undefined || password == undefined){
            throw new Error("Por favor, completa todos los campos");
        }

        const newTeacher = await teacher.create(data);
        return newTeacher; 
    } catch (error) {
        console.log(error?.message || error);
    }
};

