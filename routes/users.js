var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var user=require('../models/user.js').user;
var util=require('util');

mongoose.connect('mongodb://localhost/nodejs');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users/index', { title: 'userPage' });
});
router.get('/login', function(req, res, next) {
    res.render('users/login', { title: 'userLogin' });
});
router.post('/login',function(req,res,next){
    var query={userid:req.body.username,password:req.body.password};
    (function(){
        util.inspect(user,true);
        user.count(query, function(err, doc){

            if(doc == 1){
                console.log(query.userid + ": login success in " + new Date());
                res.redirect('./home');
            }else{
                console.log(query.userid + ": login failed in " + new Date());
                res.send(util.inspect(user,true));
            }
        });
    })(query);
});
router.get('/logout', function(req, res, next) {
    res.render('users/logout', { title: 'userLogout' });
});
router.get('/home', function(req, res, next) {
    var user={username:'admin',password:'admin'};

    res.render('users/home', { title: 'home主页',user:user });
});

module.exports = router;
