import { EducationRepository } from "../repositories/educationRepository.js";
import { EducationNotFoundError } from "../errors/appErrors.js";
import { EducationValidator } from "../validators/educationValidator.js";

export class EducationService {
    constructor() {
        this.educationRepository = new EducationRepository();
        this.educationValidator = new EducationValidator();
    }

    getEducation() {
        return this.educationRepository.getEducation();
    }

    async getEducationByID(id) {
        if (!await this.educationRepository.educationExists(parseInt(id))) {
            throw new EducationNotFoundError(id);
        }
        return this.educationRepository.getEducationByID(parseInt(id));
    }

    postEducation(payload) {
        this.educationValidator.validatePayload(payload);
        payload.startDate = new Date(payload.startDate);
        if (payload.endDate) {
            payload.endDate = new Date(payload.endDate);
        }
        return this.educationRepository.postEducation(payload);
    }

    async putEducation(id, payload) {
        if (!await this.educationRepository.educationExists(parseInt(id))) {
            throw new EducationNotFoundError(id);
        }
        this.educationValidator.validatePayload(payload);
        payload.startDate = new Date(payload.startDate);
        if (payload.endDate) {
            payload.endDate = new Date(payload.endDate);
        }
        return this.educationRepository.putEducation(parseInt(id), payload);
    }

    async deleteEducation(id) {
        if (!await this.educationRepository.educationExists(parseInt(id))) {
            throw new EducationNotFoundError(id);
        }
        return this.educationRepository.deleteEducation(parseInt(id));
    }

    static instance() {
        return new EducationService();
    }
}
