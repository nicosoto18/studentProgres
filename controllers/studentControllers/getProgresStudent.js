import { grade } from "../../database/db.js";

export const getProgresStudent = async(id_student, id_subject) => {
    console.log(id_student, id_subject);
    try {
        const grades = await grade.findAll({
            where: {
                id_student: id_student,
                id_subject: id_subject 
            },
            order: [['date_grade', 'ASC']],
            attributes: ['date_grade', 'total_points', 'points_obtained', "type"]
        });

        let totalPoints = 0;
        let obtainedPoints = 0;
        const progres = [];

        for (const grade of grades) {
            totalPoints += grade.total_points;
            obtainedPoints += grade.points_obtained;

            const performance = (obtainedPoints / totalPoints) * 100;

            progres.push({
                date: grade.date_grade,
                performance: parseFloat(performance.toFixed(2)),
                totalPoints: grade.total_points,
                obtainedPoints: grade.points_obtained,
                title: grade.type
            });
        }

        return progres;

    } catch (error) {
        console.log(error?.message || error);
        throw error;
    }
};
