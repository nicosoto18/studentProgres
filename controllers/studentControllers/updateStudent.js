import { student } from "../../database/db.js"

export const updateStudent = async(newDataStudent)=>{
    try {
        const{ id,name, lastname } = newDataStudent;

    if(!id || !name || !lastname) throw new Error("Por favor, no debe dejar vacio los campos obligatorios");
    const updateStudent = await student.update(newDataStudent, {where: {id: id}});
    return updateStudent;

    } catch (error) {
      throw error;
    }
};

