const mongoose = require('mongoose')

const freeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Free", freeSchema)