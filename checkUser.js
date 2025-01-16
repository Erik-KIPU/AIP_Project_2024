var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/testMongoose2024")
var User = require("./models/user.js").User
var first_user = new User({
username: "Укен",
password: "йцуке"
})
first_user.save();