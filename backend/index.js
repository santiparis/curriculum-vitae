import app from "./app.js";
import connectDatabase from "./src/config/database.js";

const port = process.env.PORT || 3000;

await connectDatabase();

app.listen(port, () => {
    console.log("Server running in http://localhost:3000");
});
