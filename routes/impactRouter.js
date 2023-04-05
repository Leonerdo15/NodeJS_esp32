const express = require('express');
const router = express.Router();
const impactModels = require('../models/impactModels');

router.get('/', async function (req, res, next) {
    let result = await impactModels.getAllImpacts();
    res.status(result.status).send(result.data);
} );

router.get('/:id(\\d+)', async function (req, res, next) {
    let id = req.params.id;
    console.log("Retrieving impact with id " + id);
    let result = await impactModels.getImpactById(id);
    res.status(result.status).send(result.data);
} );

router.get('/us_id/:id(\\d+)', async function (req, res, next) {
    let id = req.params.id;
    let result = await impactModels.getImpactByUserId(id);
    res.status(result.status).send(result.data);
});

router.post('/', async function (req, res, next) {
    let newImpact = req.body;
    let im_force = newImpact.im_force;
    let im_us_id = newImpact.im_us_id;
    let result = await impactModels.createImpact(im_force, im_us_id);
    res.status(result.status).send(result.data);
});

module.exports = router;