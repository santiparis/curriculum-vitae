import express from "express";
import { Router } from "express";
import { ProjectController } from "../../../src/controllers/projectController.js";
import { ProjectService } from "../../../src/services/projectService.js";
import errorHandler from "../../../src/middlewares/errorHandler.js";
import asyncHandler from "../../../src/middlewares/asyncHandler.js";
import cors from "cors";

export function buildProjectApp(projectRepository) {
    const projectService = new ProjectService({ projectRepository });
    const projectController = new ProjectController({ projectService });
    const router = Router();

    router.route("/projects")
        .get(asyncHandler((req, res) => projectController.getProjects(req, res)))
        .post(asyncHandler((req, res) => projectController.postProject(req, res)));

    router.route("/projects/:id")
        .get(asyncHandler((req, res) => projectController.getProjectByID(req, res)))
        .put(asyncHandler((req, res) => projectController.putProject(req, res)))
        .delete(asyncHandler((req, res) => projectController.deleteProject(req, res)));

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(router);
    app.use(errorHandler);

    return app;
}
