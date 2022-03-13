const express = require('express');

const app = express();

const dbconfig = require('./db')
const roomRoutes = require('./routes/roomRoutes')

app.use('/api/rooms' , roomRoutes)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(" nodemon server started"))
