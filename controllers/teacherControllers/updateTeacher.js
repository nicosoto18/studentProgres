import { teacher } from "../../database/db.js"

export const updateTeacher = async(newDataTeacher)=>{
    try {
        const{ id, name, lastname, email, password } = newDataTeacher;

    if(!id || !name || !lastname || !email || !password) throw new Error("Por favor, no debe dejar vacio los campos obligatorios");

    const updateTeacher = await teacher.update({name, lastname, email, password}, {where: {id_teacher: id}});

    return updateTeacher;

    } catch (error) {
      throw error;
    }
};

