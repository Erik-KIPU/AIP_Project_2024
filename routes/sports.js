var express = require('express');
var router = express.Router();
var Sport = require('../models/sport').Sport; // Убедитесь, что экспорт модели правильный

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с films');
});

/* Страница фильма */
router.get('/:nick', async function(req, res, next) {
  try {
    // Поиск фильма по уникальному полю `nick`
    console.log("Ищу спорт с ником:", req.params.nick);
    const sports = await Sport.find({ nick: req.params.nick });

    if (!sports.length) {
      return next(new Error('Нет такого спорта'));
    }

    const sport = sports[0];
    res.render('sport', {
      title: sport.title,
      picture: sport.avatar,
      desc: sport.desc,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
