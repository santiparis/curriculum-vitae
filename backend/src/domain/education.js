export class Education {
    constructor(
        id, 
        title, 
        description, 
        institution, 
        startDate, 
        endDate, 
        degree,
        skills
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.institution = institution;
        this.startDate = startDate;
        this.endDate = endDate;
        this.degree = degree;
        this.skills = skills;
    }

    inProgress() {
        return this.endDate == undefined 
            || this.endDate > Date.now();
    }

    addSkill(newSkill) {
        this.skills.push(newSkill);
    }

    removeSkill(index) {
        this.skills.splice(index);
    }
}

export default Education;
