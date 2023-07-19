// API DOcumenATion
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";
// packages imports

import session from "express-session";
import cookieParser from "cookie-parser";

import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

//securty packges
import helmet from "helmet";
import xss from "xss-clean";

import connectDB from "./config/db.js";
// routes import

import authRoutes from "./routes/authRoutes.js";

import jobsRoutes from "./routes/jobsRoute.js";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";



//Dot ENV config
dotenv.config();

// mongodb connection
connectDB();

//Swagger api config
//swagger api options

mongoose.set('strictQuery', true);


//rest object
const app = express();
// Use cookie-parser middleware to parse cookies from requests
app.use(cookieParser());

// Configure express-session middleware to handle user sessions
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000,
    },
  })
);

//middelwares
//app.use(helmet(``));
//app.use(xss());
//app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);

//homeroute root
//app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));

//validation middelware
//app.use(errroMiddelware);


//port
const PORT = process.env.PORT || 8080;
//listen
app.listen(8080, () => {
  console.log(
    `Node Server Running In Mode on port no ${PORT}`
      .bgCyan.white
  );
});