const express = require('express')
const app = express.Router()
const constroller = require('../controllers/adopter.controller')

app.get('/adopter', (req,res) => {
    constroller.consultAdopter().then(res_controller => {
        res.send(res_controller)
    }).catch(Error => {
        console.log("Error:",Error);
        res.send(Error);
    })
})

module.exports = app