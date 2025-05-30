import express from "express";
import studentRouter from "./students/studentRouter.js";
import teacherRouter from "./teachers/teachersRouter.js";


const mainRouter = express.Router();

mainRouter
    .use("/students", studentRouter)
    .use("/teachers", teacherRouter)
    // .use("subjects", subject)
    // .use("grades", grades)


export default mainRouter;
