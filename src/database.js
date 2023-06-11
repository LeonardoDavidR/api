const mysql = require ("mysql2")

const pool = mysql.createPool({

    host : "localhost",
    user:  "root",
    password : "password33",
    database : "appBook",
    waitForConnections: true,
    connectionLimit : 10, 
    maxIdle : 10, 
    idleTimeout : 60000,
    queueLimit : 0 
}).promise();

console.log("Conexion con la base de datos creada");

module.exports = {pool};