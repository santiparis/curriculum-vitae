import { describe, expect, test, beforeEach, jest } from "@jest/globals";
import request from "supertest";
import { buildExperienceApp } from "./utils/buildExperienceApp.js";

let experienceRepository;
let app;

beforeEach(() => {
    experienceRepository = {
        getExperience: jest.fn(),
        getExperienceByID: jest.fn(),
        experienceExists: jest.fn(),
        postExperience: jest.fn(),
        putExperience: jest.fn(),
        deleteExperience: jest.fn()
    };
    app = buildExperienceApp(experienceRepository);
});

describe("Integration tests for Experience", () => {
    test("POST /experiences creates a new Experience", async () => {
        experienceRepository.postExperience.mockResolvedValue(0);

        const response = await request(app).post("/experiences").send({
            entity: "Test Entity",
            position: "Test Position",
            description: "Test Description",
            startDate: "2026-10-07",
            endDate: "2027-10-07",
            skills: ["test"]
        });

        expect(response.status).toBe(201);
        expect(response.body).toEqual({ id: 0 });
    });

    test("GET /experiences gets all experiences available", async () => {
        const experienceInstance = {
            id: 0,
            entity: "Test Entity",
            position: "Test Position",
            description: "Test Description",
            startDate: "2026-10-07",
            endDate: "2027-10-07",
            skills: ["test"]
        };

        experienceRepository.getExperience.mockResolvedValue([experienceInstance]);

        const response = await request(app).get("/experiences");

        expect(response.status).toBe(200);
        expect(response.body.length).toEqual(1);
        expect(response.body[0].id).toBe(0);
        expect(response.body[0].entity).toBe("Test Entity");
        expect(response.body[0].position).toBe("Test Position");
        expect(response.body[0].description).toBe("Test Description");
        expect(response.body[0].startDate).toBe("2026-10-07");
        expect(response.body[0].endDate).toBe("2027-10-07");
        expect(response.body[0].skills).toEqual(["test"]);
        expect(experienceRepository.getExperience).toHaveReturnedTimes(1);
    });

    test("GET /experiences/<id> gets the experience with id = <id>", async () => {
        const experienceInstance = {
            id: 0,
            entity: "Test Entity",
            position: "Test Position",
            description: "Test Description",
            startDate: "2026-10-07",
            endDate: "2027-10-07",
            skills: ["test"]
        };

        experienceRepository.experienceExists.mockResolvedValue(true);
        experienceRepository.getExperienceByID.mockResolvedValue(experienceInstance);

        const response = await request(app).get("/experiences/0");

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(0);
        expect(response.body.entity).toBe("Test Entity");
        expect(response.body.position).toBe("Test Position");
        expect(response.body.description).toBe("Test Description");
        expect(response.body.startDate).toBe("2026-10-07");
        expect(response.body.endDate).toBe("2027-10-07");
        expect(response.body.skills).toEqual(["test"]);
        expect(experienceRepository.experienceExists).toHaveReturnedTimes(1);
        expect(experienceRepository.getExperienceByID).toHaveReturnedTimes(1);
    });

    test("PUT /experiences/<id> replaces the experiences with a new experience with the new data", async () => {
        const experienceInstance = {
            id: 0,
            entity: "Test Entity",
            position: "Test Position",
            description: "Test Description",
            startDate: "2026-10-07",
            endDate: "2027-10-07",
            skills: ["test"]
        };

        experienceRepository.experienceExists.mockResolvedValue(true);
        experienceRepository.putExperience.mockResolvedValue(experienceInstance);

        const response = await request(app).put("/experiences/0").send({
            entity: "Test Entity",
            position: "Test Position",
            description: "Test Description",
            startDate: "2026-10-07",
            endDate: "2028-10-07",
            skills: ["test"]
        });

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(0);
        expect(response.body.entity).toBe("Test Entity");
        expect(response.body.position).toBe("Test Position");
        expect(response.body.description).toBe("Test Description");
        expect(response.body.startDate).toBe("2026-10-07");
        expect(response.body.endDate).toBe("2027-10-07");
        expect(response.body.skills).toEqual(["test"]);
        expect(experienceRepository.experienceExists).toHaveReturnedTimes(1);
        expect(experienceRepository.putExperience).toHaveReturnedTimes(1);
    });

    test("DELETE /experiences/<id> deletes the experience from the repository", async () => {
        const experienceInstance = {
            id: 0,
            entity: "Test Entity",
            position: "Test Position",
            description: "Test Description",
            startDate: "2026-10-07",
            endDate: "2027-10-07",
            skills: ["test"]
        };

        experienceRepository.experienceExists.mockResolvedValue(true);
        experienceRepository.deleteExperience.mockResolvedValue(experienceInstance);

        const response = await request(app).delete("/experiences/0");

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(0);
        expect(response.body.entity).toBe("Test Entity");
        expect(response.body.position).toBe("Test Position");
        expect(response.body.description).toBe("Test Description");
        expect(response.body.startDate).toBe("2026-10-07");
        expect(response.body.endDate).toBe("2027-10-07");
        expect(response.body.skills).toEqual(["test"]);
        expect(experienceRepository.experienceExists).toHaveReturnedTimes(1);
        expect(experienceRepository.deleteExperience).toHaveReturnedTimes(1);
    });
});
