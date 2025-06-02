import express from "express";
import {getAllStudentService} from "../../services/studentService/getAllStudentService.js";
import {getStudentByIdService} from "../../services/studentService/getStudentByIdService.js";
import {createStudentService} from "../../services/studentService/createStudentService.js";
import {updateStudentService} from "../../services/studentService/updateStudentService.js";
import {deleteStudentService} from "../../services/studentService/deleteStudentService.js";
import { getProgresStudentService } from "../../services/studentService/getProgresStudentService.js";

const studentRouter = express.Router();

studentRouter
.get("/", getAllStudentService)
.get("/:id", getStudentByIdService)
.get("/:id_student/:id_subject", getProgresStudentService)
.post("/", createStudentService)
.put("/:id", updateStudentService)
.delete("/:id", deleteStudentService)


export default studentRouter;
