import express from 'express';
import cors from 'cors';
import fileUpload from "express-fileupload";

const app = express();

//to load router configuration connect route files
import userRouter from './routes/userRouter.js';
import jobRouter from './routes/jobRouter.js';
import applyRouter from "./routes/applyRoutes.js";

//file
app.use(fileUpload());

//to load the cors configuration
app.use(cors());
 
//to load configuration of body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//to check upcomming request use application level middileware 
app.use("/user",userRouter);
app.use("/jobs",jobRouter);
app.use("/apply", applyRouter);

app.listen(3001);
console.log("Server Llisten at port :http://localhost:3001");