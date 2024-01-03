import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})


connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERRR", error)
            throw error
        })
        const port = process.env.PORT || 8000
        app.listen(port, () => {
            console.log(`Server in running on PORT:${port}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB CONNECTION ERROR:", err);
    })