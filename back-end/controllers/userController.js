import { db } from "../database/db.js"

//Estas constantes são criadas utilizando o export, pois deverão ser acessadas fora do escopo deste arquivo de código

//Obter todos os usuários
export const getUsers = (_, res) => {
    const sql = "SELECT * FROM USER"

    db.query(sql, (err, data) => {
        if(err){
            return res.status(500).json(err);
        }else{
            return res.status(200).json(data);
        }
    });
};

//Obter um usuário pelo ID
export const getUserById = (req, res) => {
    const userId = req.params.id;
    const sql = "SELECT * FROM USER WHERE id = ?";

    db.query(sql, [userId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        } else if (data.length === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        } else {
            return res.status(200).json(data[0]);
        }
    });
};

//Obter um usuário pelo ID
export const getUserByName = (req, res) => {
    const userId = req.params.name;
    const sql = "SELECT * FROM USER WHERE NAME = ?";

    db.query(sql, [userId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        } else if (data.length === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        } else {
            return res.status(200).json(data[0]);
        }
    });
};

//Criar um novo usuário
export const addUser = (req, res) => {
    const { name, email } = req.body;
    const sql = "INSERT INTO USER (id, name, password) VALUES (?, ?, ?)";

    db.query(sql, [name, email], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
        }
    });
};

//Atualizar um usuário existente
export const updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    const sql = "UPDATE USER SET name = ?, password = ? WHERE id = ?";

    db.query(sql, [name, email, userId], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        } else {
            return res.status(200).json({ message: "Usuário atualizado com sucesso" });
        }
    });
};

//Deletar um usuário
export const deleteUser = (req, res) => {
    const userId = req.params.id;
    const sql = "DELETE FROM USER WHERE id = ?";

    db.query(sql, [userId], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        } else {
            return res.status(200).json({ message: "Usuário deletado com sucesso" });
        }
    });
};