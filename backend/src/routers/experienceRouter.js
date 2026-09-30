import { Router } from "express";
import { ExperienceController } from "../controllers/experienceController.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const experienceController = ExperienceController.instance();
const router = Router();

router.route("/experiences")
.get(asyncHandler((req, res) => experienceController.getExperience(req, res)))
.post(asyncHandler((req, res) => experienceController.postExperience(req, res)));

router.route("/experiences/:id")
.get(asyncHandler((req, res) => experienceController.getExperienceByID(req, res)))
.put(asyncHandler((req, res) => experienceController.putExperience(req, res)))
.delete(asyncHandler((req, res) => experienceController.deleteExperience(req, res)));

export default router;
