const router = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
router.get("/notes", (req, res) => {
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});


//localhost:3001/api/notes
router.post("/notes", (req, res) => {
  const { title, note } = req.body;
  if (title && note) {
    const newNote = {
      title,
      note,
    };
readAndAppend(newNote, "../db/db.json");
    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in posting feedback");
  }
});


module.exports = router;
