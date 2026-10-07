import { ProjectRepository } from "../repositories/projectRepository.js";
import { capitalizeWords } from "../utils/stringUtils.js";
import { ProjectValidator } from "../validators/projectValidator.js";
import { ProjectNotFoundError } from "../errors/appErrors.js";

export class ProjectService {
    constructor({
        projectRepository = ProjectRepository.instance(),
        projectValidator = ProjectValidator.instance()
    } = {}) {
        this.projectRepository = projectRepository; 
        this.projectValidator = projectValidator; 
    }

    getProjects() {
        return this.projectRepository.getProjects();
    }

    async getProjectByID(id) {
        if(!await this.projectRepository.projectExists(parseInt(id))) {
            throw new ProjectNotFoundError(id);
        }
        return this.projectRepository.getProjectByID(parseInt(id));
    }

    postProject(payload) {
        this.projectValidator.validatePayload(payload);
        payload.status = capitalizeWords(payload.status);
        return this.projectRepository.postProject(payload);
    }

    async putProject(id, payload) {
        if(!await this.projectRepository.projectExists(parseInt(id))) {
            throw new ProjectNotFoundError(id);
        }
        this.projectValidator.validatePayload(payload);
        payload.status = capitalizeWords(payload.status);
        return this.projectRepository.putProject(parseInt(id), payload);
    }

    async deleteProject(id) {
        if(!await this.projectRepository.projectExists(parseInt(id))) {
            throw new ProjectNotFoundError(id);
        }
        return this.projectRepository.deleteProject(parseInt(id));
    }

    static instance() {
        return new ProjectService();
    }
}
