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

router.use('/sessionUse',function(req,res){
  var sess = req.session
  if (sess.views) {
    sess.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }  
    
});

module.exports = router;
