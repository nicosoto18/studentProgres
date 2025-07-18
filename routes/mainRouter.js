import express from "express";
import studentRouter from "./students/studentRouter.js";
import teacherRouter from "./teachers/teachersRouter.js";
import subjectRouter from "./subjects/subjectRouter.js";
import gradeRouter from "./grades/gradeRouter.js"
import studentSubjectRouter from "./studentSubjects/studentSubjectsRouter.js";
import analyticsControllerRouter from "./analyticsControllers/analyticsControllerRouter.js";


const mainRouter = express.Router();

mainRouter
    .use("/students", studentRouter)
    .use("/teachers", teacherRouter)
    .use("/subjects", subjectRouter)
    .use("/grades", gradeRouter)
    .use("/studentSubject", studentSubjectRouter)
    .use("/analyticsController", analyticsControllerRouter)


export default mainRouter;
