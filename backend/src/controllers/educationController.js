import { EducationService } from "../services/educationService.js";

export class EducationController {
    constructor() {
        this.educationService = EducationService.instance();
    }

    async getEducation(req, res) {
        const education = await this.educationService.getEducation();
        return res.status(200).json(education);
    }

    async getEducationByID(req, res) {
        const education = await this.educationService.getEducationByID(req.params.id);
        return res.status(200).json(education);
    }

    async postEducation(req, res) {
        const id = await this.educationService.postEducation(req.body);
        return res.status(201).json({ "id": id });
    }

    async putEducation(req, res) {
        const education = await this.educationService.putEducation(req.params.id, req.body);
        return res.status(200).json(education);
    }

    async deleteEducation(req, res) {
        const education = await this.educationService.deleteEducation(req.params.id);
        return res.status(200).json(education);
    }

    static instance() {
        return new EducationController(EducationService.instance());
    }
}
