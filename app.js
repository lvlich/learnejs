const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let ejs = require("ejs");

app.get("/", function(req, res) {
    const day = new Date();
    const dayOfWeek = day.getDay();
    console.log(dayOfWeek);
    res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function() {
    console.log("Start listening on port 3000");
});