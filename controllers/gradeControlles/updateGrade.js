import { grade } from "../../database/db.js";

export const updateGrade = async(newDataGrade)=>{
    try {
        const{ id, id_subject, type, date_grade, total_points, points_obtained, description } = newDataStudent;

    if(!id) throw new Error("Por favor, no deje vacio el campo clave ID");
    const updateGrade = await grade.update(newDataStudent, {where: {id_grade: id}});
    return updateGrade;

    } catch (error) {
      throw error;
    }
};

