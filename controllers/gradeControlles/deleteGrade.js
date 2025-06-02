import { grade } from "../../database/db.js";

export const deleteGrade = async(id)=>{
    try {
        const gradeToDelete = await grade.findByPk(id);
        if(!gradeToDelete){
             throw new Error("No existe ningun estudiante con ese id");
        }
        await gradeToDelete.destroy();
        return gradeToDelete;
    } catch (error) {
        console.log(error?.message || error);
    }
};


