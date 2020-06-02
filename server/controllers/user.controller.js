const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passwordResetToken = require('../models/resettoken');


module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}


module.exports.ResetPassword = (req, res) => {
  if (!req.body.email) {
    return res
    .status(500)
    .json({ message: 'Email is required' });
  }
  const user = User.findOne({
    email:req.body.email
  });
  if (!user) {
    return res
    .status(409)
    .json({ message: 'Email does not exist' });
  }
  var resettoken = new passwordResetToken({ _userId: user._id, resettoken: crypto.randomBytes(16).toString('hex') });
  resettoken.save(function (err) {
    if (err) { return res.status(500).send({ msg: err.message }); }
    passwordResetToken.find({ _userId: user._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
    res.status(200).json({ message: 'Reset Password successfully.' });
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: 'Gmail',
      port: 465,
      auth: {
        user: 'user',
        pass: 'password'
      }
    });
    var mailOptions = {
      to: user.email,
      from: 'Truyentien97@gmail.com',
      subject: 'Node.js Password Reset',
      text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      'http://localhost:4200/response-reset-password/' + resettoken.resettoken + '\n\n' +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    }
    transporter.sendMail(mailOptions, (err, info) => {
    })
  })
}

module.exports.ValidPasswordToken = (req, res) => {
  if (!req.body.resettoken) {
    return res
    .status(500)
    .json({ message: 'Token is required' });
  }
  const user = passwordResetToken.findOne({
    resettoken: req.body.resettoken
  });
  if (!user) {
    return res
    .status(409)
    .json({ message: 'Invalid URL' });
  }
  User.findOneAndUpdate({ _id: user._userId }).then(() => {
    res.status(200).json({ message: 'Token verified successfully.' });
  }).catch((err) => {
    return res.status(500).send({ msg: err.message });
  });
}

module.exports.NewPassword = (req, res) => {
  passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, userToken, next) {
    if (!userToken) {
      return res
      .status(409)
      .json({ message: 'Token has expired' });
    }

    User.findOne({
      _id: userToken._userId
    }, function (err, userEmail, next) {
      if (!userEmail) {
        return res
        .status(409)
        .json({ message: 'User does not exist' });
      }
      return bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
        if (err) {
          return res
          .status(400)
          .json({ message: 'Error hashing password' });
        }
        userEmail.password = hash;
        userEmail.save(function (err) {
          if (err) {
            return res
            .status(400)
            .json({ message: 'Password can not reset.' });
          } else {
            userToken.remove();
            return res
            .status(201)
            .json({ message: 'Password reset successfully' });
          }

        });
      });
    });

  })
}

