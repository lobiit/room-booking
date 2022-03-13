const mongoose = require("mongoose")

const roomschema = mongoose.schema({
    name: {
        type: String,
        required: true
    },
    maxcount:{
        type: Number,
        required: true
    },
    phonenumber : {
        type: Number,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    imageurls:[],
    currentbookings: [],
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamp: true,
})

const roomModel = mongoose.model('rooms', roomSchema)

module.exports = roomModel
