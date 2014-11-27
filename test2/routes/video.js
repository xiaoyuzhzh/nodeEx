var express = require('express');
var router = express.Router();

/* GET video page. */
router.get('/', function(req, res) {
  res.render('video', { title: 'three piece' });
});

module.exports = router;