const mongoose = require('mongoose')

const doubleSchema = mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    list: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('DoubleSchema', doubleSchema)