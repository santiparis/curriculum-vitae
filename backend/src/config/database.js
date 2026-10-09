import mongoose from "mongoose";

async function connectDatabase() {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cv"
        );
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error while connecting to MongoDB: ", error);
        throw error;
    }
}

export default connectDatabase;
