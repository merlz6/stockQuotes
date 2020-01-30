const mongoose = require('mongoose')

mongoose.Promise = Promise

const mongoURI = 'mongodb://localhost/notePad'

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(instance => console.log(`Connected to db: ${instance.connections[0].name}`))
    .catch(error => console.log('Connection Failed!', error))

module.exports = mongoose
