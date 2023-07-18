const express = require('express');
const router = express.Router();

const Employee = require('./Employee');

router.get('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    })

    emp.save().then(res.send(emp)).catch((err)=>{
         console.log(err)
    })
})

module.exports = router;