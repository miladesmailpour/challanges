const notes = require("express").Router();
// reading and writing to the JSON file
const { readFromFile, readAndAppend } = require("../helper/fsUtils");
// generate unique id
const uuid = require("../helper/uuid");

// GET Route to return all notes
notes.get("/", async (req, res) => {
  console.info(`${req.method} request received for notes router`);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});
// POST Route for submitting notes
module.exports = notes;
