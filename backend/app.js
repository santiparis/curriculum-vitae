import express from "express";
import cors from "cors";

// Routers
import healthRouter from "./src/routers/healthRouter.js";
import educationRouter from "./src/routers/educationRouter.js";
import experienceRouter from "./src/routers/experienceRouter.js";
import projectRouter from "./src/routers/projectRouter.js";

// Middlewares
import errorHandler from "./src/middlewares/errorHandler.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(healthRouter);
app.use(educationRouter);
app.use(experienceRouter);
app.use(projectRouter);
app.use(errorHandler);

export default app;
