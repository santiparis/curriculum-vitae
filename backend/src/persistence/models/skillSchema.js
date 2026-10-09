import mongoose from "mongoose";
import { Skill } from "../../domain/skill.js";

export const skillSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    area: { type: String, required: true },
    _id: false
});

skillSchema.loadClass(Skill);
