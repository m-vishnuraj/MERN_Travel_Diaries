import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";

const app = express();
dotenv.config();

// middleware
app.use("/user", userRouter);

// connection to database
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.hpilm34.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection successful & Listening to localhost port 5000")
    )
  )
  .catch((err) => console.log(err));
