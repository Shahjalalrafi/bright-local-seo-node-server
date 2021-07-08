const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    greet: {
        type: String,
        required: true,
        trim: true
    },
    name:  {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Team', teamSchema)