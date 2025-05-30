import { student } from "../../database/db.js";

export const getStudentById = async(id) =>{
    try {
        const wantedStudent = await student.findByPk(id);
        return wantedStudent;
    } catch (error) {
        console.log(error?.message || error);
    }
};

