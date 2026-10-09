import mongoose from "mongoose";
import { Project } from "../../domain/project.js";
import { skillSchema } from "./skillSchema.js";

const projectSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    status: { type: String, required: true },
    skills: { type: [skillSchema], required: true, default: [] },
});

projectSchema.loadClass(Project);

export default mongoose.model("ProjectModel", projectSchema);
