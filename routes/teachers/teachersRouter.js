import express from "express";
import { getAllTeachersService } from "../../services/teacherService/getAllTeachersService.js";
import { getTeacherByIdService } from "../../services/teacherService/getTeacherByIdService.js";
import { createTeacherService } from "../../services/teacherService/createTeacherService.js";
import { updateTeacherService } from "../../services/teacherService/updateTeacherService.js";
import {deleteTeacherService} from "../../services/teacherService/deleteTeacherService.js";


const teacherRouter = express.Router();

teacherRouter
.get("/", getAllTeachersService)
.get("/:id", getTeacherByIdService)
.post("/", createTeacherService)
.put("/:id", updateTeacherService)
.delete("/:id", deleteTeacherService)

export default teacherRouter;
