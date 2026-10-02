export class Experience {
    constructor(
        id, 
        entity, 
        position, 
        description, 
        startDate, 
        endDate,
        skills
    ) {
        this.id = id;
        this.entity = entity;
        this.position = position;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.skills = skills;
    }

    inProgress() {
        return this.endDate == null
            || !(this.endDate < Date.now());
    }

    addSkill(newSkill) {
        this.skills.push(newSkill);
    }
}
