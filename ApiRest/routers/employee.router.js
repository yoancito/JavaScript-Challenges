const express = require('express')
const app = express.Router()
const constroller = require('../controllers/employee.controller.js')

app.get('/employees', (req,res) => {
    constroller.consultUsers().then(res_controller => {
        res.send(res_controller)
    }).catch(Error => {
        console.log("Error:",Error);
        res.send(Error);
    })
})

module.exports = app