const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    accountNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true,
    },
    identityNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

var user = mongoose.model('user', userSchema);
module.exports = user;
