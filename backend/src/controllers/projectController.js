import { ProjectService } from "../services/projectService.js";

export class ProjectController {
    constructor() {
        this.projectService = ProjectService.instance();
    }

    async getProjects(req, res) {
        const projects = await this.projectService.getProjects();        
        res.status(200).json(projects);
    }

    async getProjectByID(req, res) {
        const project = await this.projectService.getProjectByID(req.params.id);
        res.status(200).json(project);
    }
    
    async postProject(req, res) {
        const id = await this.projectService.postProject(req.body);
        res.status(201).json({ "id": id });
    }

    async putProject(req, res) {
        const project = await this.projectService.putProject(req.params.id, req.body);
        res.status(200).json(project);
    }

    async deleteProject(req, res) {
        const project = await this.projectService.deleteProject(req.params.id);
        res.status(200).json(project);
    }

    static instance() {
        return new ProjectController();
    }
}
