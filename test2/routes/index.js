var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/db1', function(req, res) {
  res.render('db1', { title: 'double1' });
});

router.get('/db2', function(req, res) {
  res.render('db2', { title: 'double2' });
});

module.exports = router;
