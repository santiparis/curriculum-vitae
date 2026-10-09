import mongoose from "mongoose";
import Education from "../../domain/education.js";
import { skillSchema } from "./skillSchema.js";

const educationSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true},
    description: { type: String, required: true },
    institution: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    degree: { type: String, required: true },
    skills: { type: [skillSchema], required: true, default: [] },
});

educationSchema.loadClass(Education);

export default mongoose.model("EducationModel", educationSchema);
