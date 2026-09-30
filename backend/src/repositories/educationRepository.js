import Education from "../domain/education.js";

export class EducationRepository {
    constructor() {
        this.idCounter = 0;
        this.education = [];
    }

    getEducation() {
        return new Promise(resolve => setTimeout(() => {
            resolve(this.education);
        }, 500));
    }

    getEducationByID(id) {
        return new Promise(resolve => setTimeout(() => {
            resolve(this.education.find(education => education.id === id));
        }, 500));
    }

    educationExists(id) {
        return new Promise(resolve => setTimeout(() => {
            resolve(this.education.some(education => education.id === id));
        }, 500));
    }

    postEducation(payload) {
        return new Promise(resolve => setTimeout(() => {
            this.education.push(new Education(
                this.idCounter,
                payload.title,
                payload.description,
                payload.institution,
                payload.startDate,
                payload.endDate,
                payload.degree.trim().toUpperCase()
            ));
            this.idCounter++;
            resolve(this.idCounter - 1);
        }, 500));
    }

    putEducation(id, payload) {
        return new Promise(resolve => setTimeout(() => {
            const index = this.education.findIndex(education => education.id === id);
            const education = this.education[index];
            this.education[index] = new Education(
                education.id,
                payload.title,
                payload.description,
                payload.institution,
                payload.startDate,
                payload.endDate,
                payload.degree.trim().toUpperCase()
            );
            resolve(education);
        }, 500));
    }

    deleteEducation(id) {
        return new Promise(resolve => setTimeout(() => {
            const index = this.education.findIndex(education => education.id === id);
            const education = this.education[index];
            this.education.splice(index);
            resolve(education);
        }, 500));
    }

    static instance() {
        return new EducationRepository();
    }
}
