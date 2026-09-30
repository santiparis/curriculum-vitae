class Education {
    constructor(id, title, description, institution, startDate, endDate, degree) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.institution = institution;
        this.startDate = startDate;
        this.endDate = endDate;
        this.degree = degree;
    }

    inProgress() {
        return this.endDate == null;
    }
}

export default Education;
