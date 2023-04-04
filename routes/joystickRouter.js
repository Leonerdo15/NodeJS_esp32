const express = require('express');
const router = express.Router();
const joystickModel = require('../models/joystickModels');

router.post('/',  async function (req,res) {
    console.log("entra en el post")
    let joystick = req.body

    let x = joystick.x
    let y = joystick.y
    let z = joystick.z
    console.log(joystick, "joystick")
    let save = await joystickModel.postJoystick(x, y, z)
    console.log(save, "save")
    res.status(save.status).send(save.data)
})

module.exports = router