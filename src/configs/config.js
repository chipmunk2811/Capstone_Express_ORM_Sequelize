require('dotenv').config();

module.exports={
    DB: process.env.DB_DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port:  process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
}