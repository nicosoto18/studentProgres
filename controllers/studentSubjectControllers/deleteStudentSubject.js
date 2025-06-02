import { student_subject } from "../../database/db.js";

export const deleteStudentSubject = async(id)=>{
    try {
        const studentSubjectToDelete = await student_subject.findByPk(id);
        if(!studentSubjectToDelete){
             throw new Error("No existe ningun estudiante con ese id");
        }
        await studentSubjectToDelete.destroy();
        return studentSubjectToDelete;
    } catch (error) {
        console.log(error?.message || error);
    }
};

