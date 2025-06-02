import express from "express";
import {getAllGradeService} from "../../services/gradeService/getAllGradeService.js"
import {getGradeByIdService} from "../../services/gradeService/getGradeByIdService.js"
import {getGradeByStudentIdService} from "../../services/gradeService/getGradeByStudentService.js"
import {createGradeService} from "../../services/gradeService/createGradeService.js"
import {updateGradeService} from "../../services/gradeService/updateGradeService.js"
import { deleteGradeService } from "../../services/gradeService/deleteGradeService.js";


const gradeRouter = express.Router();

gradeRouter
.get("/", getAllGradeService)
.get("/:id_grade", getGradeByIdService)
.get("/student/:id_student",getGradeByStudentIdService)
.post("/", createGradeService)
.put("/:id", updateGradeService)
.delete("/:id_grade", deleteGradeService)


export default gradeRouter;
