const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({}); // passportLocalMongoose will create the username and password

userSchema.plugin(passportLocalMongoose, {usernameLowerCase: true}); // This add many functions (e.g. creatStrategy)

module.exports = mongoose.model('User', userSchema);