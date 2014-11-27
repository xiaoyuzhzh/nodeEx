var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/user').user;
mongoose.connect('mongodb://localhost/hello-world');

/* GET users listing. */
//路由中的路径是与中间件的路径想衔接的。此路由在中间件的路径是/user,则访问路径是/user/login
router.get('/login', function(req, res) {
  res.render('login', { title: 'login' });
});

/*valid*/
router.use('/valid', function(req, res) {
    if(req.session){
      if(req.session.name){
          console.log(req.session.name + ": is logining now");
      }
    }
    var query_doc = {userid: req.body.userid, password: req.body.password};
    (function(){
        user.count(query_doc, function(err, doc){
            if(doc == 1){
                console.log(query_doc.userid + ": login success in " + new Date());
                req.session.name = query_doc.userid;
                res.send(req.session);
                res.render('homepage', { title: 'homepage', user:query_doc});
            }else{
                console.log(query_doc.userid + ": login failed in " + new Date());
                res.redirect('/');
            }
        });
    })(query_doc);
});


module.exports = router;
