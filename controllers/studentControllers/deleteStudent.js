import { student } from "../../database/db.js"

export const deleteStudent = async(id)=>{
    try {
        const studentToDelete = await student.findByPk(id);
        if(!studentToDelete){
             throw new Error("No existe ningun estudiante con ese id");
        }
        await studentToDelete.destroy();
        return studentToDelete;
    } catch (error) {
        console.log(error?.message || error);
    }
};

