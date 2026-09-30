export class Project {
    constructor(id, title, description, link, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
        this.status = status;
    }
    
    inProgress() {
        return this.status === "In Progress";
    }

    completed() {
        return this.status === "Completed";
    }
}
