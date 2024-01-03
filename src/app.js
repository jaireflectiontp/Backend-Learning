import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" })) //to handle and limit data coming in json form
app.use(express.urlencoded({ extended: true, limit: "16kb" }))  //to handle and limit data coming with url encoded
app.use(express.static("public"))
app.use(cookieParser())

export { app }