require("dotenv").config();
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var con = require('./config/db.js').mysql_pool;
con.getConnection(function (err, connection) {
        connection.query('SELECT * FROM wp_posts LIMIT ?', 2, function (err, rows){
        connection.release();
        if (err){throw err};
        if (!rows.length) {return res.send(404)}
            dynamicData = rows[0];
        });
    });

app.get("/", (req, res, next) => {res.json(dynamicData)});
app.listen(PORT, () => {console.log("Listening on port "+ PORT)});