import express from "express";
import { getStudentsBySubjectsService } from "../../services/analyticsControllers/getStudentsBySubjecsService.js";

const analyticsControllerRouter = express.Router();

analyticsControllerRouter
.get("/studentsBySubject/:id_subject", getStudentsBySubjectsService)

export default analyticsControllerRouter;


