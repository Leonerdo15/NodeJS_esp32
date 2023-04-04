const express = require('express');
const router = express.Router();
const ipModels = require('../models/ipModels');

router.get('/',  async function (req,res) {
    let save = await ipModels.getIp()
    res.status(save.status).send(save.data[0].ip_number)
})

router.get('/update/:id',  async function (req,res) {
    let id = req.params.id
    console.log("entra en el get")
    let save = await ipModels.updateIp(id)
    console.log(save, "save")
    res.status(save.status).send(save.data)
})

module.exports = router