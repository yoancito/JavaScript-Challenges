const express = require('express')
const app = express.Router()
const constroller = require('../controllers/adoption.controller')

const merge = require("../organize")

app.get('/adoption', (req,res) => {
    constroller.consultAdoption().then(res_controller => {
        res.send(res_controller)
    }).catch(Error => {
        console.log("Error:",Error);
        res.send(Error);
    })
})

app.get('/maxadopter', (req,res) => {
    constroller.consultAdoption().then(res_controller => {
        var organizedlist = merge.mergeSort(res_controller);
        res.send(organizedlist)
    }).catch(Error => {
        console.log("Error", error);
    })
})

module.exports = app