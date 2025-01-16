const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })
schema.methods.meow = function(){
console.log(this.name + " сказал гол")
}
const Sport = mongoose.model('Sport', schema);
const sporting = new Sport({ name: 'Хоккей' });
sporting.save().then(() => sporting.meow());
