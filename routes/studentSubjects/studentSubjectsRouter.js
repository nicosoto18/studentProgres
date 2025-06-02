import express from "express";
import {getAllStudentSubjectService} from "../../services/studentSubjectService/getAllStudentSubjectService.js"
import {createStudentSubjectService} from "../../services/studentSubjectService/createStudentSubjectService.js"
import {deleteStudentSubjectService} from "../../services/studentSubjectService/deleteStudentSubjectService.js"

const studentSubjectRouter = express.Router();

studentSubjectRouter
.get("/", getAllStudentSubjectService)
.post("/", createStudentSubjectService)
.delete("/:id", deleteStudentSubjectService)



export default studentSubjectRouter;