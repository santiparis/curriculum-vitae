export class Project {
    constructor(
        id, 
        title, 
        description, 
        link, 
        status,
        skills
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
        this.status = status;
        this.skills = skills;
    }
    
    inProgress() {
        return this.status === "In Progress";
    }

    completed() {
        return this.status === "Completed";
    }

    addSkill(newSkill) {
        this.skills.push(newSkill);
    }
}
