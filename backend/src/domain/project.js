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
    
    changeStatus() {
        if (this.status === "In Progress") {
            this.status = "Completed";
        } else {
            this.status = "In Progress";
        }
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

    removeSkill(index) {
        this.skills.splice(index);
    }
}
