const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
  title: String,
  // Change yearReleased to String to avoid validation errors
  type: String,
  description: String,
  date: { type: Date, default: Date.now },
})

const Notes = mongoose.model('Notes', NoteSchema)

 module.exports = Notes
