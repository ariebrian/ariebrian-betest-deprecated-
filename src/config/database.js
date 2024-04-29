const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/db_ariebrian_betest';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;