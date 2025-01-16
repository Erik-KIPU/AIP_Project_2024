const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Sport = mongoose.model('Sport', { name: String });
const sporting = new Sport({ name: 'Хоккей' });
sporting.save().then(() => console.log('Гол'));