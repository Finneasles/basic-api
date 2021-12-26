var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

// Data
data = ["do","re","me","fa","so","la","ti","do"];

app.get("/", (req, res, next) => {res.json(data)});
app.listen(PORT, () => {console.log("Listening on port: "+ PORT)});