import { EducationMissingFieldsError, EducationInvalidDegreeError, InvalidDateError } from "../errors/appErrors.js";
import { validDate } from "../utils/dateUtils.js";

export class EducationValidator {
    validatePayload(payload) {
        const required = ["title", "description", "institution", "startDate", "degree", "skills"];
        const missing = required.filter(field => payload[field] === undefined || payload[field] === null || String(payload[field]).trim() === "");
        
        if (missing.length > 0) {
            throw new EducationMissingFieldsError(missing);
        }

        if (!validDate(payload.startDate)) {
            throw new InvalidDateError(payload.startDate);
        }

        if (payload.endDate && !validDate(payload.endDate)) {
            throw new InvalidDateError(payload.endDate);
        }

        const degrees = ["bachelor", "associate", "master", "doctoral"];

        if (!degrees.includes(payload.degree.trim().toLowerCase())) {
            throw new EducationInvalidDegreeError(payload.degree.trim().toUpperCase());
        }
    }
}
