import { capitalizeWords } from "../utils/stringUtils.js";
import { ProjectMissingFieldsError, ProjectInvalidStatusError } from "../errors/appErrors.js";

export class ProjectValidator {
    validatePayload(payload) {
        const required = ["title", "description", "link", "status"];
        const missing = required.filter(field => payload[field] === undefined || payload[field] === null || String(payload[field]).trim() === "");
        
        if (missing.length > 0) {
            throw new ProjectMissingFieldsError(missing);
        }

        const states = ["in progress", "completed"];

        if (!states.includes(payload.status.trim().toLowerCase())) {
            throw new ProjectInvalidStatusError(capitalizeWords(payload.states.trim()));
        }
    }
}
