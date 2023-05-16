const { Sequelize } = require("sequelize");
const { DB, DB_USER, DB_PASSWORD, host, port, dialect } = require("../configs/config.js");
const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
    host: host,
    port: port,
    dialect: dialect
});
module.exports = sequelize;
// yarn sequelize-auto -h localhost -d db_express_orm -u root -x Huong1301@may -p 3306 --dialect mysql -o src/models -l es6
