import ExperienceModel from "../persistence/models/experienceModel.js";

export class ExperienceRepository {
    getExperience() {
        return ExperienceModel.find({});
    }

    getExperienceByID(id) {
        return ExperienceModel.findOne({ id: id });
    }

    async experienceExists(id) {
        return (await ExperienceModel.exists({ id: id })) !== null;
    }

    async postExperience(payload) {
        const newID = await this.nextExperienceID();
        await ExperienceModel.create({
            id: newID,
            entity: payload.entity,
            position: payload.position,
            description: payload.description,
            startDate: payload.startDate,
            endDate: payload.endDate,
            skills: payload.skills
        });
        return newID;
    }

    async putExperience(id, payload) {
        return ExperienceModel.findOneAndReplace({ id: id }, {
            id: id,
            entity: payload.entity,
            position: payload.position,
            description: payload.description,
            startDate: payload.startDate,
            endDate: payload.endDate,
            skills: payload.skills
        });
    }

    async deleteExperience(id) {
        return ExperienceModel.findOneAndDelete({ id: id });
    }

    async nextExperienceID() {
        return await ExperienceModel.countDocuments();
    }

    static instance() {
        return new ExperienceRepository();
    }
}
