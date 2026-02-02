import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}));

// Data will come from URL, json

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({
    extended: true, limit: "16kb"
}));

// To store some files on my own server like fevicon and other assests.
app.use(express.static("public"))

// Cookieparser is just taking care of sensitive cookies -> that they can only be manipulated by server.
app.use(cookieParser())

export {app}