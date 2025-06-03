import { student_subject, student, grade } from "../../database/db.js";

export const getStudentsBySubject = async (id_subject) => {
  try {
    console.log(id_subject)
    const studentSubjects = await student_subject.findAll({
      where: { id_subject },
      include: [
        {
          model: student,
          attributes: ["id_student", "name", "lastname"],
        },
      ],
    });

    const result = [];

    for (const entry of studentSubjects) {
      const { id_student } = entry;

      const grades = await grade.findAll({
        where: { id_student, id_subject },
      });

      let totalPoints = 0;
      let obtainedPoints = 0;

      for (const grade of grades) {
        totalPoints += grade.total_points;
        obtainedPoints += grade.points_obtained;
      }

      const average = totalPoints > 0 ? (obtainedPoints / totalPoints) * 10 : 0;

      result.push({
        id_student,
        id_subject,
        student: {
          name: entry.student.name,
          lastname: entry.student.lastname,
        },
        average: parseFloat(average.toFixed(2)),
        atRisk: average < 6,
      });
    }

    return result;
  } catch (error) {
    console.log(error?.message || error);
    throw new Error("Error al obtener estudiantes por materia");
  }
};
