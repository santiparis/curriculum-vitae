import { describe, expect, test } from "@jest/globals";
import { Education } from "../../src/domain/education.js";
import { Skill } from "../../src/domain/skill.js";

describe("Unit tests for Education", () => {
    test("inProgress returns true if endDate > now", () => {
        const now = new Date();
        const education = new Education(
            0,
            "Test",
            "Test description",
            "Test institution",
            new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
            new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()),
            "BACHELOR",
            []
        );

        expect(education.inProgress()).toBe(true);
    });

    test("inProgress returns false if endDate < now", () => {
        const now = new Date();
        const education = new Education(
            0,
            "Test",
            "Test description",
            "Test institution",
            new Date(now.getFullYear() - 2, now.getMonth(), now.getDate()),
            new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
            "BACHELOR",
            []
        );

        expect(education.inProgress()).toBe(false);
    });

    test("inProgress returns true if endDate is undefined", () => {
        const education = new Education(
            0,
            "Test",
            "Test description",
            "Test institution",
            "2025-03-01",
            undefined,
            "BACHELOR",
            []
        );

        expect(education.inProgress()).toBe(true);
    });

    test("Education adds skills correctly", () => {
        const education = new Education(
            0,
            "Test",
            "Test description",
            "Test institution",
            "2025-03-01",
            undefined,
            "BACHELOR",
            []
        );

        const skill = new Skill(
            "Test",
            "Test Description",
            "Test Area"
        );

        education.addSkill(skill);

        expect(education.skills.length).toBe(1);
        expect(education.skills[0]).toBe(skill);
    });

    test("Education removes a skill correctly", () => {
        const skill = new Skill(
            "Test",
            "Test Description",
            "Test Area"
        );

        const education = new Education(
            0,
            "Test",
            "Test description",
            "Test institution",
            "2025-03-01",
            undefined,
            "BACHELOR",
            [skill]
        );

        expect(education.skills.length).toBe(1);
        expect(education.skills[0]).toBe(skill);

        education.removeSkill(0);

        expect(education.skills.length).toBe(0);
        expect(education.skills[0]).toBe(undefined);
    });
});
