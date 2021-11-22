var express = require('express');
var router = express.Router();

/* GET home page. */ //api/v1/test
router.get('/test', function(req, res, next) {
  res.json({success: true});
});

module.exports = router;
