const notes = require("express").Router();

notes.get("/", (req, res) => {
  res.send("Visit http://localhost:3001/api");
  console.log("notes route called!");
});

module.exports = notes;
