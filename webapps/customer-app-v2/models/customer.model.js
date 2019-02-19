const mongoose = require('mongoose');
const moment = require('moment');

// Create our schema
const customerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
});

customerSchema.virtual('birthdayFormatted').get(function() {
  let momentObj = moment.utc(this.birthday);
  
  return momentObj.format('YYYY-MM-DD');
})

module.exports = mongoose.model('Customer', customerSchema);