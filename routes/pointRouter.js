const express = require('express');
const router = express.Router();
const pointModels = require('../models/pointModels');

router.get('/', async function (req, res, next) {
    let result = await pointModels.getAllPoints();
    res.status(result.status).send(result.data);
});

router.get('/:id(\\d+)', async function (req, res, next) {
    let id = req.params.id;
    console.log("Retrieving point with id " + id);
    let result = await pointModels.getPointById(id);
    res.status(result.status).send(result.data);
});

router.get('/ro_id/:id(\\d+)', async function (req, res, next) {
    let id = req.params.id;
    console.log("Retrieving point with id " + id);
    let result = await pointModels.getPointByRouteId(id);
    res.status(result.status).send(result.data);
});

router.post('/', async function (req, res, next) {
    let newPoint = req.body;
    let po_location = newPoint.po_location;
    let po_altitude = newPoint.po_altitude;
    let po_velocity = newPoint.po_velocity;
    let po_TempOutside = newPoint.po_TempOutside;
    let po_TempInside = newPoint.po_TempInside;
    let po_gx = newPoint.po_gx;
    let po_gy = newPoint.po_gy;
    let po_gz = newPoint.po_gz;
    let po_ax = newPoint.po_ax;
    let po_ay = newPoint.po_ay;
    let po_az = newPoint.po_az;
    let po_DistUltraSound = newPoint.po_DistUltraSound;
    let po_ro_id = newPoint.po_ro_id;
    let result = await pointModels.createPoint(po_location, po_altitude, po_velocity, po_TempOutside, po_TempInside, po_gx, po_gy, po_gz, po_ax, po_ay, po_az, po_DistUltraSound, po_ro_id);
    res.status(result.status).send(result.data);
});

module.exports = router;