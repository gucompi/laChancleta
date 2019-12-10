const passport = require('passport');
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require("./user/user.model")
const key = require("./env");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= key.secretOrKey;


module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({email:jwt_payload.email})
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, 'false');
        })
        .catch(err => done(err,null));
    })
);
