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

// Add New Employee
router.post('/', async (req, res) => {
    const employeePost = new Employee({
        _id: req.body.id,
        name: req.body.name,
        department: req.body.department
    })

    try {
        const data = await employeePost.save()
        res.json(data)
    } catch (error) {
        res.json({message:error})
    }
})

// get one employee
router.get('/:id', async (req, res) => {
    try {
        const data = await Employee.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.json({message:error})
    }
})

// update employee by id
router.put('/:id', async (req, res) => {
    try {
        const data = await Employee.updateOne({_id: req.params.id}, {
            name: req.body.name,
            department: req.body.department
        })
        res.json(data)
    } catch (error) {
        res.json({message:error})
    }
})

// delete by id
router.delete('/:id', async (req, res) => {
    try {
        const data = await Employee.deleteOne({_id:req.params.id})
        res.json(data)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router
