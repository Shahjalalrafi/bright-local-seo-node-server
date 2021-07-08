const mongoose = require('mongoose')

const headerSchema = mongoose.Schema({
    header: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Header', headerSchema)