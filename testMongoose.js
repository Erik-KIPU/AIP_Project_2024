const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Sport = require('./models/Sport.js').Sport
var sport = new Sport({
    title: "Футбол",
    nick: "football",
})
sport.save();