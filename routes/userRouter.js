const express = require('express');
const router = express.Router();
const userModels = require('../models/userModels');

router.get('/', async function (req, res, next) {
    let result = await userModels.getAllUsers();
    res.status(result.status).send(result.data);
});

router.get('/:id(\\d+)', async function (req, res, next) {
    let id = req.params.id;
    console.log("Retrieving user with id " + id);
    let result = await userModels.getUserById(id);
    res.status(result.status).send(result.data);
});

router.get('/login/email/:email/pass/:pass', async function (req, res, next) {
    let email = req.params.email;
    let pass = req.params.pass;
    console.log("Retrieving user with email " + email);
    let result = await userModels.getLoginAuth(email, pass);
    res.status(result.status).send(result.data);
});

router.get('/:id(\\d+)/ip', async function (req, res, next) {
    let id = req.params.id;
    console.log("Retrieving user with id " + id);
    let result = await userModels.getUserIpById(id);
    res.status(result.status).send(result.data.us_ip);
});

router.put('/:id(\\d+)/ip/:ip', async function (req, res, next) {
    let id = req.params.id;
    let ip = req.params.ip;
    console.log("Updating user with id " + id);
    let result = await userModels.updateUserIpById(id, ip);
    res.status(result.status).send(result.data);
});

router.post('/', async function (req, res, next) {
    let newUser = req.body;
    let us_name = newUser.us_name;
    let us_email = newUser.us_email;
    let us_pass = newUser.us_pass;
    let result = await userModels.createUser(us_name, us_email, us_pass);
    res.status(result.status).send(result.data);
});

module.exports = router;