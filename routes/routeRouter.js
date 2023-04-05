const express = require('express');
const router = express.Router();
const routeModels = require('../models/routeModels');

router.get('/', async function (req, res, next) {
    let result = await routeModels.getAllRoutes();
    res.status(result.status).send(result.data);
});

router.get('/:id(\\d+)', async function (req, res, next) {
    let id = req.params.id;
    console.log("Retrieving route with id " + id);
    let result = await routeModels.getRouteById(id);
    res.status(result.status).send(result.data);
} );

router.get('/us_id/:id(\\d+)', async function (req, res, next) {
    let id = req.params.id;
    console.log("Retrieving route with id " + id);
    let result = await routeModels.getRouteByUserId(id);
    res.status(result.status).send(result.data);
});

router.post('/', async function (req, res, next) {
    let newRoute = req.body;
    let ro_name = newRoute.ro_name;
    let ro_us_id = newRoute.ro_us_id;
    let result = await routeModels.createRoute(ro_name, ro_us_id);
    res.status(result.status).send(result.data);
} );

module.exports = router;