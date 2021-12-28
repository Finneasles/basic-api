require("dotenv").config();
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
// Import mysql connection configuration
var con = require('./config/db.js').mysql_pool;
con.getConnection( (err, connection) =>{
        connection.query('SELECT * FROM table_name LIMIT ?', 100,  (err, rows) => {
        connection.release();
        if (err){throw err};
        if (!rows.length) {return res.send(404)}
        console.log("Fetched database successfully");
        dynamicData = rows[0]
    })});
app.get("/", (req, res, next) => {res.json(dynamicData)});
app.listen(PORT, () => {console.log("Listening on port "+ PORT)});