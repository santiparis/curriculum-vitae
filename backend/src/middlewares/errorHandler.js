import { AppError } from "../errors/appErrors.js";

function errorHandler(error, _req, res, next) {
    if (error instanceof AppError) {
        return res.status(error.status).json({
            message: error.message
        });
    }

    if (error instanceof Error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }

    return next(error);
}

export default errorHandler;
