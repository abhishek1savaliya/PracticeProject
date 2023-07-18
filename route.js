const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;
const Employee = require('./Employee');


router.get('/:id', async (req, res) => {
    const id = req.params.id
    if (objectId.isValid(id)) {
        const employee = await Employee.findById(id);
        if (employee) {
            res.status(200).send(employee)
        }
        else {
            res.status(400).send(`Record Not found with id: ${id}`);
        }
    }
    else {
        res.status(400).send(`${id} is Not Valid`);
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    if (objectId.isValid(id)) {
        const employee = await Employee.findByIdAndDelete(id);
        res.status(200).send(employee)
    }
    else {
        res.status(400).send(`Record Not found with id: ${id}`);
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
 

    if (objectId.isValid(id)) {
        const employee = await Employee.findByIdAndUpdate(id, { name: req.body.name,
            position: req.body.position,
            dept: req.body.dept }, { new: true });
        if (employee) {
            res.status(200).send(employee)
        }
        else {
            res.status(400).send(`Record Not found with id: ${id}`);
        }
    }
    else {
        res.status(400).send(`${id} is Not Valid`);
    }
})


router.get('/', async (req, res) => {
    const data = await Employee.find({})
    res.send(data)
})


router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    })

    emp.save().then(res.send(emp)).catch((err) => {
        console.log(err)
    })
})

module.exports = router;