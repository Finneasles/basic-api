var mysql = require("mysql");
var config; 
config = {
    mysql_pool : mysql.createPool({
        host: process.env.MYSQL_HOST || "localhost",
        database: process.env.MYSQL_DB || "local",
        user: process.env.MYSQL_USER || "root",
        password: process.env.MYSQL_PW || "",
        port: process.env.MYSQL_PORT || 3306
    })};
module.exports = config;