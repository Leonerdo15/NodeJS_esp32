var express = require('express');
var router = express.Router();
const requestIP = require('request-ip');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const cordx = req.query.cordx;
  const cordy = req.query.cordy;
  console.log(`Coordinates: (${cordx}, ${cordy})`);
  res.send(`Coordinates: (${cordx}, ${cordy})`);
});

module.exports = router;
