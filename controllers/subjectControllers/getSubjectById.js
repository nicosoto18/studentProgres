import { subject } from "../../database/db.js";

export const getSubjectById = async(id) =>{
    try {
        const wantedSubject = await subject.findByPk(id);
        return wantedSubject;
    } catch (error) {
        console.log(error?.message || error);
    }
};
