import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routers/authRouter.js";
import userRouter from "./routers/userRouter.js";
const app = express();
const port = 5000;

app.use(cors());

mongoose.connect("mongodb://localhost:27017/montazeran", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use(authRouter);
app.use(userRouter);
app.listen(port, () => console.log("server is running"));
