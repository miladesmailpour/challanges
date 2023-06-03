const notes = require("express").Router();
// reading and writing to the JSON file
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helper/fsUtils");
// generate unique id
const uuid = require("../helper/uuid");

// GET Route to return all notes
notes.get("/", async (req, res) => {
  console.info(`${req.method} request received for notes router`);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific note
notes.get("/:note_id", (req, res) => {
  console.info(`${req.method} request received for notes router`);
  const noteId = req.params.note_id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json("No note with that ID");
    });
});
// POST Route for submitting note
notes.post("/", (req, res) => {
  console.info(`${req.method} request received for notes router`);
  console.log(req.body);
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`note added successfully 🚀`);
  } else {
    res.error("Error in adding note");
  }
});
// DELETE Route for a specific note
notes.delete("/:note_id", (req, res) => {
  const noteId = req.params.note_id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id !== noteId);

      // Save that array to db (json file)
      writeToFile("./db/db.json", result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});
module.exports = notes;
