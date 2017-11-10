const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-Local-Mongoose');

const User = new Schema({
	username: String,
	password: {type: String, select: false},
	firstname: String,
	lastname: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);