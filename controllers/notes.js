const express = require("express")
const router = express.Router()
const Notes = require("../models/Notes");

router.get("/", (req, res) => {
    Notes.find({}).then(notes => res.json(notes))
})

router.get("/:noteId", (req, res) => {
  Notes.find({ _id: req.params.noteId }).then(note => res.json(note));
});

router.get("/title/:title", (req, res) => {
  Notes.find({ title: req.params.title }).then(note => res.json(note));
});

router.post("/", (req, res) => {
    let newNote = req.body
    Notes.create(newNote).then(() => {
        Notes.find({}).then(notes => res.json(notes))
    })
})

router.put("/:noteId", (req, res) => {
    let updatedNote = req.body
    let noteId = req.params.noteId
    Notes.findOneAndUpdate({ _id: noteId }, updatedNote, { new: true }).then(() => {
        Notes.find({}).then(notes => res.json(notes))
    })
})

router.delete("/:noteId", (req, res) => {
    let noteId = req.params.noteId
    Notes.findOneAndDelete({ _id: noteId }).then(() => {
        Notes.find({}).then(notes => res.json(notes))
    })
})

module.exports = router
