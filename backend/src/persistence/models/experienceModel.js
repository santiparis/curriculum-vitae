import mongoose from "mongoose";
import { Experience } from "../../domain/experience.js";
import { skillSchema } from "./skillSchema.js";

const experienceSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    entity: { type: String, required: true },
    position: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    skills: { type: [skillSchema], required: true, default: [] },
});

experienceSchema.loadClass(Experience);

export default mongoose.model("ExperienceModel", experienceSchema);
