const express = require('express')
const app = express.Router()
const constroller = require('../controllers/pet.controller')

app.get('/pet', (req,res) => {
    constroller.consultPet().then(res_controller => {
        res.send(res_controller)
    }).catch(Error => {
        console.log("Error:",Error);
        res.send(Error);
    })
})

module.exports = app