const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;
// these values can be whatever you want - we're defaulting to a
// max of 6 attempts, resulting in a 0.5 hour lock
MAX_LOGIN_ATTEMPTS = 6,
  LOCK_TIME = 0.5 * 60 * 60 * 1000;
//const Group = require('/group');

const UserSchema = new Schema({
  firstname: {type:String},
  lastname: {type:String},
  email: {type:String},
  username: {type:String},
  password: {type:String},

});

UserSchema.virtual('isLocked').get(function() {
  // check for a future lockUntil timestamp
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

UserSchema.pre('save', function (next) {
  const users = this,
    SALT_FACTOR = 5;

  if (!users.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(users.password, salt, null, function(err, hash) {
      if (err) return next(err);
      users.password = hash;
      next();
    });
  });
});


// Method to compare password for login
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if (err) { return cb(err); }

    cb(null, isMatch);
  });
};



// UserSchema.methods.incLoginAttempts = function(cb) {
//   // if we have a previous lock that has expired, restart at 1
//   if (this.lockUntil && this.lockUntil < Date.now()) {
//     return this.update({
//       $set: { loginAttempts: 1 },
//       $unset: { lockUntil: 1 }
//     }, cb);
//   }
//   // otherwise we're incrementing
//   var updates = { $inc: { loginAttempts: 1 } };
//   // lock the account if we've reached max attempts and it's not locked already
//   if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
//     updates.$set = { lockUntil: Date.now() + LOCK_TIME };
//   }
//   return this.update(updates, cb);
// };

// expose enum on the model, and provide an internal convenience reference
var reasons = UserSchema.statics.failedLogin = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 2
};

UserSchema.statics.getAuthenticated = function(username, password, cb) {
  this.findOne({ username: username }, function(err, user) {
    if (err) return cb(err);

    // make sure the user exists
    if (!user) {
      return cb(null, null, reasons.NOT_FOUND);
    }

    // check if the account is currently locked
    // if (user.isLocked) {
    //   // just increment login attempts if account is already locked
    //   return user.incLoginAttempts(function(err) {
    //     if (err) return cb(err);
    //     return cb(null, null, reasons.MAX_ATTEMPTS);
    //   });
    // }

    // test for a matching password
    user.comparePassword(password, function(err, isMatch) {
      if (err) return cb(err);

      // check if the password was a match
      if (isMatch) {
        // if there's no lock or failed attempts, just return the user
        if (!user.loginAttempts && !user.lockUntil) return cb(null, user);
        // reset attempts and lock info
        var updates = {
        };
        return user.update(updates, function(err) {
          if (err) return cb(err);
          return cb(null, user);
        });
      }

      // password is incorrect, so increment login attempts before responding
      // user.incLoginAttempts(function(err) {
      //   if (err) return cb(err);
      //   return cb(null, null, reasons.PASSWORD_INCORRECT);
      // });
    });
  });
};


module.exports = mongoose.model('users', UserSchema, 'Utility_users');
