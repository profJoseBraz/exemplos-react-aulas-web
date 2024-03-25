import { db } from "../database/db.js"

//Esta constante é criada utilizando o export, pois deverá ser acessada fora do escopo deste arquivo de código
export const getUsers = (_, res) => {

    const sql = "SELECT * FROM USER"

    db.query(sql, (err, data) => {
        if(err){
            return res.jason(err);
        }else{
            return res.status(200).json(data);
        }
    });
};