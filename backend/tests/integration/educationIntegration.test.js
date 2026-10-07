import { describe, expect, test, beforeEach, jest } from "@jest/globals";
import request from "supertest";
import { buildEducationApp } from "./utils/buildEducationApp.js";

let educationRepository;
let app;

beforeEach(() => {
  educationRepository = {
    getEducation: jest.fn(),
    getEducationByID: jest.fn(),
    educationExists: jest.fn(),
    postEducation: jest.fn(),
    putEducation: jest.fn(),
    deleteEducation: jest.fn()
  }
  app = buildEducationApp(educationRepository);
});

describe("Integration tests for Education", () => {
  test("POST /education creates a new Education", async () => {
    educationRepository.postEducation.mockResolvedValue(0);

    const response = await request(app).post("/education").send({
      title: "Test",
      description: "Test Description",
      institution: "Test Institution",
      startDate: "2026-10-05",
      endDate: "2026-11-05",
      degree: "Bachelor",
      skills: ["test"]
    });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ id: 0 });
    expect(educationRepository.postEducation).toHaveBeenCalledTimes(1);
  });

  test("GET /education gets all education available", async () => {
    const educationInstance = {
      id: 0,
      title: "Test",
      description: "Test Description",
      institution: "Test Institution",
      startDate: "2026-10-05",
      endDate: "2026-11-05",
      degree: "Bachelor",
      skills: ["test"]
    };

    educationRepository.getEducation.mockResolvedValue([educationInstance]);

    const response = await request(app).get("/education");

    expect(response.status).toBe(200);
    expect(response.body.length).toEqual(1);
    expect(response.body[0].id).toBe(0);
    expect(response.body[0].title).toBe("Test");
    expect(response.body[0].description).toBe("Test Description");
    expect(response.body[0].institution).toBe("Test Institution");
    expect(response.body[0].startDate).toBe("2026-10-05");
    expect(response.body[0].endDate).toBe("2026-11-05");
    expect(response.body[0].degree).toBe("Bachelor");
    expect(response.body[0].skills).toEqual(["test"]);
    expect(educationRepository.getEducation).toHaveBeenCalledTimes(1);
  });

  test("GET /education/<id> gets the education with id = <id>", async () => {
    const educationInstance = {
      id: 0,
      title: "Test",
      description: "Test Description",
      institution: "Test Institution",
      startDate: "2026-10-05",
      endDate: "2026-11-05",
      degree: "Bachelor",
      skills: ["test"]
    };

    educationRepository.educationExists.mockResolvedValue(true);
    educationRepository.getEducationByID.mockResolvedValue(educationInstance);

    const response = await request(app).get("/education/0");

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(0);
    expect(response.body.title).toBe("Test");
    expect(response.body.description).toBe("Test Description");
    expect(response.body.institution).toBe("Test Institution");
    expect(response.body.startDate).toBe("2026-10-05");
    expect(response.body.endDate).toBe("2026-11-05");
    expect(response.body.degree).toBe("Bachelor");
    expect(response.body.skills).toEqual(["test"]);
    expect(educationRepository.educationExists).toHaveBeenCalledTimes(1);
    expect(educationRepository.getEducationByID).toHaveBeenCalledTimes(1);
  });

  test("PUT /education/<id> replaces the education with another education with the new data", async () => {
    
  });
});