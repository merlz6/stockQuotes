const express = require('express')
const parser = require('body-parser')
const app = express()
const cors = require("cors")

const noteController = require("./controllers/notes")

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.use(cors())

app.use("/notes/", noteController)

app.listen(3000, () => console.log('listening on port 3000'))
