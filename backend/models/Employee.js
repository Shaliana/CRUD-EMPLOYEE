const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: String
    }
})

module.exports = mongoose.model('Employee', EmployeeSchema)