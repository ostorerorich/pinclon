import mysql from 'mysql2'


export const connectionDatabase = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME_DB
})