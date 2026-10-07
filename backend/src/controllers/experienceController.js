import { ExperienceService } from "../services/experienceService.js";

export class ExperienceController {
    constructor({
        experienceService = ExperienceService.instance()
    } = {}) {
        this.experienceService = experienceService;
    }

    async getExperience(req, res) {
        const experiences = await this.experienceService.getExperience();
        return res.status(200).json(experiences);
    }

    async getExperienceByID(req, res) {
        const experience = await this.experienceService.getExperienceByID(req.params.id);
        return res.status(200).json(experience);
    }

    async postExperience(req, res) {
        const id = await this.experienceService.postExperience(req.body);
        return res.status(201).json({ "id": id });
    }

    async putExperience(req, res) {
        const experience = await this.experienceService.putExperience(req.params.id, req.body);
        return res.status(200).json(experience);
    }

    async deleteExperience(req, res) {
        const experience = await this.experienceService.deleteExperience(req.params.id);
        return res.status(200).json(experience);
    }

    static instance() {
        return new ExperienceController();
    }
}
