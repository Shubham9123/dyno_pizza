let data = require('../public/js/dyno_pizza.json')
let express = require('express');
let router = express.Router();


console.log(data)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',data:data });
});

router.get('/index*', function(req, res, next) {
  res.render('index', { title: 'Express',data:data });
});

router.get('/menu*', function(req, res, next) {
  res.render('menu', { data:data });
});

router.get('/about*', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/book*', function(req, res, next) {
  res.render('book', { title: 'Express' });
});

module.exports = router;
