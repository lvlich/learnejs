const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
let ejs = require("ejs");

const date = require(__dirname + "/date.js");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

const ITEMS = [];

app.get("/", function (req, res) {
    var today = date.getDate();
    var x = { today: today, newItem: ITEMS }
    
    console.log(JSON.stringify(x));
    res.render("list", x);
});

app.post("/", function (req, res) {
    ITEMS.push(req.body.item)
    res.redirect("/");
})

app.get("/about", function (req, res) {
    res.render("about");
})

app.listen(3000, function () {
    console.log("Start listening on port 3000");
});