import express from "express";
import { Router } from "express";
import { EducationController } from "../../../src/controllers/educationController.js";
import { EducationService } from "../../../src/services/educationService.js";
import errorHandler from "../../../src/middlewares/errorHandler.js";
import asyncHandler from "../../../src/middlewares/asyncHandler.js";
import cors from "cors";

export function buildEducationApp(educationRepository) {
  const educationService = new EducationService({educationRepository});
  const educationController = new EducationController({educationService});
  const router = Router();

  router.route("/education")
    .get(asyncHandler((req, res) => educationController.getEducation(req, res)))
    .post(asyncHandler((req, res) => educationController.postEducation(req, res)));

  router.route("/education/:id")
    .get(asyncHandler((req, res) => educationController.getEducationByID(req, res)))
    .put(asyncHandler((req, res) => educationController.putEducation(req, res)))
    .delete(asyncHandler((req, res) => educationController.deleteEducation(req, res)));

  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(router);
  app.use(errorHandler);

  return app;
}