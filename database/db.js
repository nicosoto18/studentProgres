import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";
import gradesModel from "./models/gradesModel.js";
import studentModel from "./models/studentModel.js";
import studentSubjectModel from "./models/studentSubjectModel.js";
import subjectModel from "./models/subjectModel.js";
import teacherModel from "./models/teacherModel.js";

const {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT} = process.env;


export const sequelize = new Sequelize({
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    logging: false
});


gradesModel(sequelize);
studentModel(sequelize);
studentSubjectModel(sequelize);
subjectModel(sequelize);
teacherModel(sequelize);

export const {grade, student, student_subject, subject, teacher} = sequelize.models;

//model associations: 

// teachers and subject
teacher.hasMany(subject, {foreignKey: "id_teacher"});
subject.belongsTo(teacher, {foreignKey: "id_teacher"});

//subject and grades
subject.hasMany(grade, {foreignKey: "id_subject"});
grade.belongsTo(subject, {foreignKey: "id_subject"});

//students and grades
student.hasMany(grade, {foreignKey: "id_student"});
grade.belongsTo(student, {foreignKey: "id_student"});

//student and subject
student.belongsToMany(subject, {
    through: student_subject,
    foreignKey: "id_student",
    otherKey: "id_subject",
});
subject.belongsToMany(student, {
    through: student_subject,
    foreignKey: "id_subject",
    otherKey: "id_student",
});




