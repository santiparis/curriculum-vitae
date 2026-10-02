import { describe, expect, test } from "@jest/globals";
import { Project } from "../../src/domain/project.js";
import { Skill } from "../../src/domain/skill.js";

describe("Unit test for Project", () => {
    test("Project changes to status \"Completed\" when is \"In Progress\"", () => {
        const project = new Project(
            0,
            "Test",
            "Test Description",
            "http://example.com",
            "In Progress",
            []
        );

        project.changeStatus();

        expect(project.status).toBe("Completed");
    });

    test("Project changes to status \"In Progress\" when is \"Completed\"", () => {
        const project = new Project(
            0,
            "Test",
            "Test Description",
            "http://example.com",
            "Completed",
            []
        );

        project.changeStatus();

        expect(project.status).toBe("In Progress");
    });

    test("inProgress returns true when is \"In Progress\" and false when is \"Completed\"", () => {
        const project = new Project(
            0,
            "Test",
            "Test Description",
            "http://example.com",
            "In Progress",
            []
        );

        expect(project.inProgress()).toBe(true);

        project.changeStatus();

        expect(project.inProgress()).toBe(false);
    });

    test("completed returns true when is \"Completed\" and false when is \"In Progress\"", () => {
        const project = new Project(
            0,
            "Test",
            "Test Description",
            "http://example.com",
            "Completed",
            []
        );

        expect(project.completed()).toBe(true);

        project.changeStatus();

        expect(project.completed()).toBe(false);
    });

    test("Project adds skills correctly", () => {
        const project = new Project(
            0,
            "Test",
            "Test Description",
            "http://example.com",
            "In Progress",
            []
        );

        const skill = new Skill(
            "Test",
            "Test Description",
            "Test Area"
        );

        project.addSkill(skill);

        expect(project.skills.length).toBe(1);
        expect(project.skills[0]).toBe(skill);
    });

    test("Project removes a skill correctly", () => {
        const skill = new Skill(
            "Test",
            "Test Description",
            "Test Area"
        );
        
        const project = new Project(
            0,
            "Test",
            "Test Description",
            "http://example.com",
            "In Progress",
            [skill]
        );
    
        expect(project.skills.length).toBe(1);
        expect(project.skills[0]).toBe(skill);
        
        project.removeSkill(0);

        expect(project.skills.length).toBe(0);
        expect(project.skills[0]).toBe(undefined);
    });
});
