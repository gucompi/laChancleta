
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("./user/user.model")
const key = require("./env")
module.export = passport.use(new GoogleStrategy({
    clientID: key.idClienteGoogle,
    clientSecret: key.secretKey,
    callbackURL: "http://localhost:3000/user/redirectGOOGLE"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   console.log(user)
    //   return cb(err, user);
    // });
    User.find({googleId: profile.id}, (err, user)=> {
      if (user ) return cb(null,{})
      return cb(null,{})
    })
    
  }
));