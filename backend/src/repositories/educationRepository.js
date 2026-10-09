import EducationModel from "../persistence/models/educationModel.js";

export class EducationRepository {
    getEducation() {
        return EducationModel.find({});
    }

    getEducationByID(id) {
        return EducationModel.findOne({ id: id });
    }

    async educationExists(id) {
        return (await EducationModel.exists({ id: id })) !== null;
    }

    async postEducation(payload) {
        const newID = await this.nextEducationID();
        await EducationModel.create({
            id: newID,
            title: payload.title,
            description: payload.description,
            institution: payload.institution,
            startDate: payload.institution,
            endDate: payload.endDate,
            degree: payload.degree.trim().toUpperCase(),
            skills: payload.skills
        });
        return newID;
    }

    async putEducation(id, payload) {
        return EducationModel.findOneAndReplace(
            { id: id },
            {
                id: id,
                title: payload.title,
                description: payload.description,
                institution: payload.institution,
                startDate: payload.startDate,
                endDate: payload.endDate,
                degree: payload.degree.trim().toUpperCase(),
                skills: payload.skills
            });
    }

    async deleteEducation(id) {
        return EducationModel.findOneAndDelete({ id: id });
    }

    async nextEducationID() {
        return await EducationModel.countDocuments();
    }

    static instance() {
        return new EducationRepository();
    }
}
