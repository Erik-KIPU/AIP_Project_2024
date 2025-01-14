var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Футбола */
router.get('/football', function(req, res, next) {
  res.send("<h1>Страница Футбола</h1>")
  });
  /* Страница Баскетбола */
router.get('/basketball', function(req, res, next) {
  res.send("<h1>Страница Баскетбола</h1>")
  });
  /* Страница Тенниса */
  router.get('/tennis', function(req, res, next) {
  res.send("<h1>Страница Тенниса</h1>")
  });

module.exports = router;
