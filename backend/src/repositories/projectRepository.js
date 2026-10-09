import ProjectModel from "../persistence/models/projectModel.js";

export class ProjectRepository {
    getProjects() {
        return ProjectModel.find({});
    }

    getProjectByID(id) {
        return ProjectModel.findOne({ id: id });
    }

    async projectExists(id) {
        return (await ProjectModel.exists({ id: id })) !== null;
    }

    async postProject(payload) {
        const newID = await this.nextProjectID();
        await ProjectModel.create({
            id: newID,
            title: payload.title,
            description: payload.description,
            link: payload.link,
            status: payload.status,
            skills: payload.skills
        });
        return newID;
    }

    async putProject(id, payload) {
        return ProjectModel.findOneAndReplace({ id: id }, {
            id: id,
            title: payload.title,
            description: payload.description,
            link: payload.link,
            status: payload.status,
            skills: payload.skills
        });
    }

    async deleteProject(id) {
        return ProjectModel.findOneAndDelete({ id: id });
    }

    async nextProjectID() {
        return await ProjectModel.countDocuments();
    }

    static instance() {
        return new ProjectRepository();
    }
}
