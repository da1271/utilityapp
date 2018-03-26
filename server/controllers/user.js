var mongoose = require('mongoose');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

exports.signup = function(req, res, next) {
  // Check for registration errors
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  if (!firstname || !lastname || !email || !username || !password ) {
    return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.' });
  }

  User.findOne({ username: username }, function(err, existingUser) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }

    // If user is not unique, return error
    if (existingUser) {
      return res.status(201).json({
        success: false,
        message: 'Username already exists.'
      });
    }

    // if( password.toLowerCase().indexOf(firstname.toLowerCase()) !== -1 || password.toLowerCase().indexOf(lastname.toLowerCase()) !== -1 ) {
    //   return res.status(201).json({
    //     success: false,
    //     message: 'Password contains the username or the lastname.'
    //   });
    // }

    // var password_history = [];

    // If no error, create account
    var oUser = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      password: password,

    });

    oUser.save(function(err, oUser) {
      if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }

      res.status(201).json({
        success: true,
        message: 'User created successfully, please login to access your account.'
      });
    });
  });
}

exports.login = function(req, res, next) {
  // find the user
  // User.findOne({ username: req.body.username }, function(err, user)
  User.getAuthenticated(req.body.username, req.body.password, function(err, user, reason) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }

    if (!user) {
      res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
    } else if (user)  {
      var token = jwt.sign({data: user}, config.secret, {
          expiresIn: 3600
        });
        console.log(token)

        res.status(201).json({
          success: true,
          message: {
            'userid': user._id, 'username': user.username,
            'firstname': user.firstname, 'email': user.email, 'lastname': user.lastname
          },
          token: token
  });
      }

    var reasons = User.failedLogin;
    switch (reason) {
      case reasons.NOT_FOUND:
      case reasons.PASSWORD_INCORRECT:
        // note: these cases are usually treated the same - don't tell
        // the user *why* the login failed, only that it did
        break;
      case reasons.MAX_ATTEMPTS:
        // send email or otherwise notify user that account is
        // temporarily locked
        break;
    }
  });
}
