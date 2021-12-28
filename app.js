var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

// Example Static Data
var StaticData = [
    {
        "id": "1",
        "content": {
        "entry":"Doo"
    }
    },
    {
        "id": "2",
        "content": {
        "entry":"Ree"
    }
    },
    {
        "id": "3",
        "content": {
        "entry":"Mee"
    }
    }
];

app.get("/", (req, res, next) => {res.json(StaticData)});
app.listen(PORT, () => {console.log("Listening on port: "+ PORT)});