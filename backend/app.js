const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const employeeRoute = require('./routes/employee')
const bodyParser = require('body-parser')
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api/employees', employeeRoute)

mongoose.connect(process.env.DB_CONNECTION)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Database Connect Error!'))
db.once('open', () => {
    console.log('Database is Connected')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.PORT}`);
})