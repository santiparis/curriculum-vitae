import { Experience } from "../domain/experience.js";

export class ExperienceRepository {
    constructor() {
        this.experiences = [];
        this.idCounter = 0;
    }

    getExperience() {
        return new Promise(resolve => setTimeout(() => {
            resolve(this.experiences);
        }, 500));
    }

    getExperienceByID(id) {
        return new Promise(resolve => setTimeout(() => {
            resolve(this.experiences.find(experience => experience.id === id));
        }, 500));
    }

    experienceExists(id) {
        return new Promise(resolve => setTimeout(() => {
            resolve(this.experiences.some(experience => experience.id === id));
        }, 500));
    }

    postExperience(payload) {
        return new Promise(resolve => setTimeout(() => {
            this.experiences.push(new Experience(
                this.idCounter,
                payload.entity,
                payload.position,
                payload.description,
                payload.startDate,
                payload.endDate,
                []
            ));
            this.idCounter++;
            resolve(this.idCounter - 1);
        }, 500));
    }

    putExperience(id, payload) {
        return new Promise(resolve => setTimeout(() => {
            const index = this.experiences.findIndex(experience => experience.id === id);
            const experience = this.experiences[index];
            this.experiences[index] = new Experience(
                experience.id,
                payload.entity,
                payload.position,
                payload.description,
                payload.startDate,
                payload.endDate,
                []
            );
            resolve(experience);
        }, 500));

    }

    deleteExperience(id) {
        return new Promise(resolve => setTimeout(() => {
            const index = this.experiences.findIndex(experience => experience.id === id);
            const experience = this.experiences[index];
            this.experiences.splice(index);
            resolve(experience);
        }, 500));
    }

    static instance() {
        return new ExperienceRepository();
    }
}
