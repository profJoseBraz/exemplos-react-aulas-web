import express from "express";
import userRoutes from "../routes/user.js";
// import taskRoutes from "../routers/tasks.js";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());

//Rotas para os endpoints referentes às informações dos usuários
server.use("/users", userRoutes);

//Rotas para os endpoints referentes às informações das tarefas
// server.use("/tasks", taskRoutes);

server.listen(8080);