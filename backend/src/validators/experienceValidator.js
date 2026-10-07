import { ExperienceMissingFieldError, InvalidDateError } from "../errors/appErrors.js";
import { validDate } from "../utils/dateUtils.js";

export class ExperienceValidator {
    validatePayload(payload) {
        const required = ["entity", "position", "description", "startDate", "skills"];
        const missing = required.filter(field => payload[field] === undefined || payload[field] === null || String(payload[field]).trim() === "");

        if (!validDate(payload.startDate)) {
            throw new InvalidDateError(payload.startDate);
        }

        if (payload.endDate && !validDate(payload.endDate)) {
            throw new InvalidDateError(payload.endDate);
        }

        if (missing.length > 0) {
            throw new ExperienceMissingFieldError(missing);
        }
    }
}
