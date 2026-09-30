import { EducationMissingFieldsError, EducationInvalidDegreeError } from "../errors/appErrors.js";

export class EducationValidator {
    validatePayload(payload) {
        const required = ["title", "description", "institution", "startDate", "degree"];
        const missing = required.filter(field => payload[field] === undefined || payload[field] === null || String(payload[field]).trim() === "");
        
        if (missing.length > 0) {
            throw new EducationMissingFieldsError(missing);
        }

        const degrees = ["bachelor", "associate", "master", "doctoral"];

        if (!degrees.includes(payload.degree.trim().toLowerCase())) {
            throw new EducationInvalidDegreeError(payload.degree.trim().toUpperCase());
        }
    }
}
