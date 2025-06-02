import express from "express";
import {getAllSubjectService} from "../../services/subjectService/getAllSubjectService.js"
import {getSubjectByIdService} from "../../services/subjectService/getSubjectByIdService.js"
import { createSubjectService } from "../../services/subjectService/createSubjectService.js";


const subjectRouter = express.Router();

subjectRouter
.get("/", getAllSubjectService)
.get("/:id", getSubjectByIdService)
.post("/", createSubjectService)



export default subjectRouter;