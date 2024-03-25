import express from "express";
import { getUsers, addUser, updateUser, deleteUser, getUserById, getUserByName } from "../controllers/userController.js";

const router = express.Router();

//Rota para retornar todos os usuários cadastrados
router.get("/", getUsers);

//Rota para retornar apenas um usuário baseado em seu ID
router.get("/:id", getUserById);

//Rota para retornar apenas um usuário baseado em seu nome
router.get("/username/:name", getUserByName);

//Rota para adicionar um novo usuário
router.post("/", addUser);

//Rota para alterar os dados de um usuário
router.put("/:id", updateUser);

//Rota para deletar um usuário
router.delete("/:id", deleteUser);

export default router;