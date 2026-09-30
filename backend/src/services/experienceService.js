import { ExperienceRepository } from "../repositories/experienceRepository.js";
import { ExperienceNotFoundError } from "../errors/appErrors.js";
import { ExperienceValidator } from "../validators/experienceValidator.js";

export class ExperienceService {
    constructor() {
        this.experienceRepository = ExperienceRepository.instance();
        this.experienceValidator = new ExperienceValidator();
    }
    
    getExperience() {
        return this.experienceRepository.getExperience();
    }

    async getExperienceByID(id) {
        if (!await this.experienceRepository.experienceExists(parseInt(id))) {
            throw new ExperienceNotFoundError(id);
        }
        return this.experienceRepository.getExperienceByID(parseInt(id));
    }

    postExperience(payload) {
        this.experienceValidator.validatePayload(payload); 
        return this.experienceRepository.postExperience(payload);
    }

    async putExperience(id, payload) {
        if (!await this.experienceRepository.experienceExists(parseInt(id))) {
            throw new ExperienceNotFoundError(id);
        }
        this.experienceValidator.validatePayload(payload);
        return this.experienceRepository.putExperience(parseInt(id), payload);
    }

    async deleteExperience(id) {
        if (!await this.experienceRepository.experienceExists(parseInt(id))) {
            throw new ExperienceNotFoundError(id);
        }
        return this.experienceRepository.deleteExperience(parseInt(id));
    }
    
    static instance() {
        return new ExperienceService();
    }
}
