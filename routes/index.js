let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const ipAddresses = req.header('x-forwarded-for');
  res.send(ipAddresses);
});

module.exports = router;
