import { teacher } from "../../database/db.js"

export const deleteTeacher = async(id)=>{
    try {
        const teacherToDelete = await teacher.findByPk(id);
        if(!teacherToDelete){
             throw new Error("No existe ningun profesor con ese id");
        }
        await teacherToDelete.destroy();
        return teacherToDelete;
    } catch (error) {
        console.log(error?.message || error);
    }
};

