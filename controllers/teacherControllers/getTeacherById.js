import { teacher,subject } from "../../database/db.js";

export const getTeacherById = async(id) =>{
    try {
        const wantedTeacher = await teacher.findByPk(id, {
            include: [
                {
                    model: subject,
                },
            ],
        });
        return wantedTeacher;
    } catch (error) {
        console.log(error?.message || error);
    }
};


