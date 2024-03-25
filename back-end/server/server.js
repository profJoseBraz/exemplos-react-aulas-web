import express from "express";
import userRoutes from "../routes/user.js";
// import cors from "cors";

const server = express();

server.use(express.json());
// server.use(cors());

server.use("/", userRoutes);

server.listen(8080);