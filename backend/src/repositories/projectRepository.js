import { Project } from "../domain/project.js";

export class ProjectRepository {
    constructor() {
        this.projects = [];
        this.idCounter = 0;
    }

    getProjects() {
        return new Promise(resolve => setTimeout(() => {
            resolve(this.projects);
        }, 500));
    }

    getProjectByID(id) {
        return new Promise(resolve => setTimeout(() => {
            resolve(this.projects.find(project => project.id === id));
        }, 500));
    }

    projectExists(id) {
       return new Promise(resolve => setTimeout(() => {
           resolve(this.projects.some(project => project.id === id));
       }, 500));
    }

    postProject(payload) {
        return new Promise(resolve => setTimeout(() => {
            this.projects.push(new Project(
                this.idCounter,
                payload.title,
                payload.description,
                payload.link,
                payload.status
            ));
            this.idCounter++;
            resolve(this.idCounter - 1);
        }, 500));
    }

    putProject(id, payload) {
        return new Promise(resolve => setTimeout(() => {
            const index = this.projects.findIndex(project => project.id === id);
            const project = this.projects[index];
            this.projects[index] = new Project(
                project.id,
                payload.title,
                payload.description,
                payload.link,
                payload.status
            );
            resolve(project);
        }, 500));
    }

    deleteProject(id) {
        return new Promise(resolve => setTimeout(() => {
            const index = this.projects.findIndex(project => project.id === id);
            const project = this.projects[index];
            this.projects.splice(index);
            resolve(project);
        }, 500));
    }

    static instance() {
        return new ProjectRepository();
    }
}
