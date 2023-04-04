const express = require('express');
const router = express.Router();
const ledModel = require('../models/LedsModels');

router.get('/',  async function (req,res) {
    let led = req.body
    console.log("entra en el get")
    let save = await ledModel.getLeds(led)
    console.log(save, "save")
    res.status(save.status).send(save.data)
})

router.get('/state',  async function (req,res) {
    let id = req.query.id
    let state = await ledModel.getState(id)
    res.status(state.status).send(state.data)
})

router.post('/',  async function (req,res) {
    console.log("entra en el post")
    let led = req.body

    let name = led.name
    let state = led.state
    console.log(led, "led")
    let save = await ledModel.postLed(name, state)
    console.log(save, "save")
    res.status(save.status).send(save.data)
})

module.exports = router