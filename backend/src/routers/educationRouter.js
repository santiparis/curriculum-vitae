import { Router } from "express";
import { EducationController } from "../controllers/educationController.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const educationController = EducationController.instance();
const router = Router();

router.route("/education")
.get(asyncHandler((req, res) => educationController.getEducation(req, res)))
.post(asyncHandler((req, res) => educationController.postEducation(req, res)));

router.route("/education/:id")
.get(asyncHandler((req, res) => educationController.getEducationByID(req, res)))
.put(asyncHandler((req, res) => educationController.putEducation(req, res)))
.delete(asyncHandler((req, res) => educationController.deleteEducation(req, res)));

export default router;
