export class AppError extends Error {
    constructor(status, message) {
        super(message, status);
        this.status = status;
        this.name = this.constructor.name;
    }
}

export class EducationNotFoundError extends AppError {
    constructor(id) {
        super(404, `Education with ID ${id} not found.`);
    }
}

export class EducationMissingFieldsError extends AppError {
    constructor(missing) {
        let message = `Education missing fields: `;
        missing.forEach(field => message += field + " ");
        super(400, message);
    }
}

export class EducationInvalidDegreeError extends AppError {
    constructor(degree) {
        super(400, `The degree ${degree} is invalid.`);
    }
}

export class ExperienceNotFoundError extends AppError {
    constructor(id) {
        super(404, `Experience with ID ${id} not found.`);
    }
}

export class ExperienceMissingFieldError extends AppError {
    constructor(missing) {
        let message = `Experience missing fields: `;
        missing.forEach(field => message += field + " ");
        super(400, message);
    }
}

export class ProjectMissingFieldsError extends AppError {
    constructor(missing) {
        let message = `Project missing fields: `;
        missing.forEach(field => message += field + " ");
        super(400, message);
    }
}

export class ProjectInvalidStatusError extends AppError {
    constructor(status) {
        super(400, `The status ${status} is invalid.`);
    }
}

export class ProjectNotFoundError extends AppError {
    constructor(id) {
        super(404, `Project with ID ${id} not found.`);
    }
}
