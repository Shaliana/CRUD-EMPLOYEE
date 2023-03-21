const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee')

// router.get('/', (req, res) => {
//     res.send('cek cek 1234')
// })

// Get All Employees
router.get('/', async (req, res) => {
    try {
        const data = await Employee.find()
        res.json(data)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router
