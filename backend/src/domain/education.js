class Education {
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
        return this.endDate == null;
    }

    addSkill(newSkill) {
        this.skills.push(newSkill);
    }
}

export default Education;
