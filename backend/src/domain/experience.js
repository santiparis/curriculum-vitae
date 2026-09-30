export class Experience {
    constructor(id, entity, position, description, startDate, endDate) {
        this.id = id;
        this.entity = entity;
        this.position = position;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    inProgress() {
        return this.endDate == null;
    }
}
