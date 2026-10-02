import { describe, expect, test } from "@jest/globals";
import { Experience } from "../../src/domain/experience.js";
import { Skill } from "../../src/domain/skill.js";

describe("Unit tests for Experience", () => {
    test("inProgress returns true if endDate > now", () => {
        const now = new Date(); 
        const experience = new Experience(
            0, 
            "Test Entity", 
            "Test Position", 
            "Test", 
            new Date(now.getFullYear() - 1, now.getMonth(), now.getDate(), ),
            new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()),
            []
        );

        expect(experience.inProgress()).toBe(true);
    });

    test("inProgress returns false if endDate < now", () => {
        const now = new Date();
        const experience = new Experience(
            0, 
            "Test Entity", 
            "Test Position", 
            "Test", 
            new Date(now.getFullYear() - 2, now.getMonth(), now.getDate(), ),
            new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
            []
        );

        expect(experience.inProgress()).toBe(false);
    });

    test("inProgress returns true if endDate is undefined", () => {
        const now = new Date();
        const experience = new Experience(
            0, 
            "Test Entity", 
            "Test Position", 
            "Test", 
            new Date(now.getFullYear() - 2, now.getMonth(), now.getDate(), ),
            undefined,
            []
        );

        expect(experience.inProgress()).toBe(true);
    });

    test("Experience adds skill correctly", () => {
        const experience = new Experience(
            0, 
            "Test Entity", 
            "Test Position", 
            "Test", 
            "2025-03-01",
            null,
            []
        );

        const skill = new Skill("Test", "Test description", "Test Area");

        experience.addSkill(skill);

        expect(experience.skills.length).toBe(1);
        expect(experience.skills[0]).toBe(skill);
    });

    test("Experience removes a skill correctly", () => {
        const skill = new Skill("Test", "Test description", "Test Area");
        const experience = new Experience(
            0, 
            "Test Entity", 
            "Test Position", 
            "Test", 
            "2025-03-01",
            null,
            [skill]
        );

        expect(experience.skills.length).toBe(1);
        expect(experience.skills[0]).toBe(skill);

        experience.removeSkill(0);

        expect(experience.skills.length).toBe(0);
        expect(experience.skills[0]).toBe(undefined);
    });
});
