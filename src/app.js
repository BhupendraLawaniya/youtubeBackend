const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus:200
}));
app.use(express.json({limit:"15kb"}));
app.use(express.urlencoded());
app.use(express.static("public"))
module.exports = app;  