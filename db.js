const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://lobiit:Pythondev12!Aa@cluster0.nxbf7.mongodb.net/VenueHunter"

mongoose.connect(mongoURL , {useUnifiedTopology : true, useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB Connection failed')
})
connection.on('connected', ()=>{
    console.log('MongoDB Connection successful')
})

module.exports = mongoose
