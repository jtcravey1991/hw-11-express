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

app.post("/api/notes", function(req, res) {
    const newNote = req.body;
    const notes = generateIds(JSON.parse(fs.readFileSync("db/db.json")));
    newNote.id = notes.length.toString();
    notes.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(notes));
    return res.json(newNote);
});

app.delete("/api/notes/:noteId", function(req, res) {
    const noteId = req.params.noteId;
    console.log(noteId);
    return res.send(noteId);
});

//starts server
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});

// generates unique ID's for notes
function generateIds(input) {
    const notes = input;
    for (let i = 0; i < notes.length; i++) {
        notes[i].id = i.toString();
    }
    return notes;
}