import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import postRouter from "./routes/postRoute.js";
import testRouter from "./routes/testRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/test", testRouter);

app.listen(3000, () => {
  console.log("Server Started at port 3000");
});
