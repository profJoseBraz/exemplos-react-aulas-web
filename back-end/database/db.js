import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "exemplos_react_aulas_web"
})