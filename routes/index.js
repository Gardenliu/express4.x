
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '不用登录可直接访问的index' });
});
router.get('/login', function(req, res, next) {
    res.render('login/index', { title: '通过index控制器访问login文件夹下面的index' });
});
module.exports = router;



