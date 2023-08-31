import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    port: 8816,
    user: "root",
    password: "sa",
    database: "MyDemo"
})
