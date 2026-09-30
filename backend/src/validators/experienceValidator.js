import { ExperienceMissingFieldError } from "../errors/appErrors.js";

export class ExperienceValidator {
    validatePayload(payload) {
        const required = ["entity", "position", "description", "startDate"];
        const missing = required.filter(field => payload[field] === undefined || payload[field] === null || String(payload[field]).trim() === "");

        if (missing.length > 0) {
            throw new ExperienceMissingFieldError(missing);
        }
    }
}
