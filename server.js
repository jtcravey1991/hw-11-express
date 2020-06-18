// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

//Declarations
const app = express();
const PORT = 8080;

//express setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//display pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

//api end points
app.get("/api/notes", function(req, res) {
    const data = JSON.parse(fs.readFileSync("db/db.json"));
    return res.json(data);
});

//starts server
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
})