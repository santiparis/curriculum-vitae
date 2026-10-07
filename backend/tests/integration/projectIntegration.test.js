import { describe, expect, test, beforeEach, jest } from "@jest/globals";
import request from "supertest";
import { buildProjectApp } from "./utils/buildProjectApp.js";

let projectRepository;
let app;

beforeEach(() => {
    projectRepository = {
        getProjects: jest.fn(),
        getProjectByID: jest.fn(),
        projectExists: jest.fn(),
        postProject: jest.fn(),
        putProject: jest.fn(),
        deleteProject: jest.fn()
    };
    app = buildProjectApp(projectRepository);
});

describe("Integration tests for Project", () => {
    test("POST /projects creates a new Project", async () => {
        projectRepository.postProject.mockResolvedValue(0);

        const response = await request(app).post("/projects").send({
            title: "Test",
            description: "Test Description",
            link: "https://example.com",
            status: "In Progress",
            skills: ["test"]
        });

        expect(response.status).toBe(201);
        expect(response.body).toEqual({ id: 0 });
    });

    test("GET /projects gets all projects available", async () => {
        const projectInstance = {
            id: 0,
            title: "Test",
            description: "Test Description",
            link: "https://example.com",
            status: "In Progress",
            skills: ["test"]
        };

        projectRepository.getProjects.mockResolvedValue([projectInstance]);

        const response = await request(app).get("/projects");

        expect(response.status).toBe(200);
        expect(response.body.length).toEqual(1);
        expect(response.body[0].id).toBe(0);
        expect(response.body[0].title).toBe("Test");
        expect(response.body[0].description).toBe("Test Description");
        expect(response.body[0].link).toBe("https://example.com");
        expect(response.body[0].status).toBe("In Progress");
        expect(response.body[0].skills).toEqual(["test"]);
        expect(projectRepository.getProjects).toHaveBeenCalledTimes(1);
    });

    test("GET /projects/<id> gets the project with id = <id>", async () => {
        const projectInstance = {
            id: 0,
            title: "Test",
            description: "Test Description",
            link: "https://example.com",
            status: "In Progress",
            skills: ["test"]
        };

        projectRepository.projectExists.mockResolvedValue(true);
        projectRepository.getProjectByID.mockResolvedValue(projectInstance);

        const response = await request(app).get("/projects/0");

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(0);
        expect(response.body.title).toBe("Test");
        expect(response.body.description).toBe("Test Description");
        expect(response.body.link).toBe("https://example.com");
        expect(response.body.status).toBe("In Progress");
        expect(response.body.skills).toEqual(["test"]);
        expect(projectRepository.projectExists).toHaveBeenCalledTimes(1);
        expect(projectRepository.getProjectByID).toHaveBeenCalledTimes(1);
    });

    test("PUT /projects/<id> replaces the project with another project with the new data", async () => {
        const projectInstance = {
            id: 0,
            title: "Test",
            description: "Test Description",
            link: "https://example.com",
            status: "In Progress",
            skills: ["test"]
        };

        projectRepository.projectExists.mockResolvedValue(true);
        projectRepository.putProject.mockResolvedValue(projectInstance);

        const response = await request(app).put("/projects/0").send({
            title: "Test",
            description: "Test Description",
            link: "https://example.com",
            status: "Completed",
            skills: ["test"]
        });

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(0);
        expect(response.body.title).toBe("Test");
        expect(response.body.description).toBe("Test Description");
        expect(response.body.link).toBe("https://example.com");
        expect(response.body.status).toBe("In Progress");
        expect(response.body.skills).toEqual(["test"]);
        expect(projectRepository.projectExists).toHaveBeenCalledTimes(1);
        expect(projectRepository.putProject).toHaveBeenCalledTimes(1);
    });

    test("DELETE /projects/<id> deletes the project from the repository", async () => {
        const projectInstance = {
            id: 0,
            title: "Test",
            description: "Test Description",
            link: "https://example.com",
            status: "In Progress",
            skills: ["test"]
        };

        projectRepository.projectExists.mockResolvedValue(true);
        projectRepository.deleteProject.mockResolvedValue(projectInstance);

        const response = await request(app).delete("/projects/0");

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(0);
        expect(response.body.title).toBe("Test");
        expect(response.body.description).toBe("Test Description");
        expect(response.body.link).toBe("https://example.com");
        expect(response.body.status).toBe("In Progress");
        expect(response.body.skills).toEqual(["test"]);
        expect(projectRepository.projectExists).toHaveBeenCalledTimes(1);
        expect(projectRepository.deleteProject).toHaveBeenCalledTimes(1);
    });
});
