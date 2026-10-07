import express from "express";
import { Router } from "express";
import { ExperienceController } from "../../../src/controllers/experienceController.js";
import { ExperienceService } from "../../../src/services/experienceService.js";
import errorHandler from "../../../src/middlewares/errorHandler.js";
import asyncHandler from "../../../src/middlewares/asyncHandler.js";
import cors from "cors";

export function buildExperienceApp(experienceRepository) {
    const experienceService = new ExperienceService({ experienceRepository });
    const experienceController = new ExperienceController({ experienceService });
    const router = Router();

    router.route("/experiences")
        .get(asyncHandler((req, res) => experienceController.getExperience(req, res)))
        .post(asyncHandler((req, res) => experienceController.postExperience(req, res)));

    router.route("/experiences/:id")
        .get(asyncHandler((req, res) => experienceController.getExperienceByID(req, res)))
        .put(asyncHandler((req, res) => experienceController.putExperience(req, res)))
        .delete(asyncHandler((req, res) => experienceController.deleteExperience(req, res)));

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(router);
    app.use(errorHandler);

    return app;
}
