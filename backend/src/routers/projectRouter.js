import { Router } from "express";
import { ProjectController } from "../controllers/projectController.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const projectController = ProjectController.instance();
const router = Router();

router.route("/projects")
.get(asyncHandler((req, res) => projectController.getProjects(req, res)))
.post(asyncHandler((req, res) => projectController.postProject(req, res)));

router.route("/projects/:id")
.get(asyncHandler((req, res) => projectController.getProjectByID(req, res)))
.put(asyncHandler((req, res) => projectController.putProject(req, res)))
.delete(asyncHandler((req, res) => projectController.deleteProject(req, res)));

export default router;
