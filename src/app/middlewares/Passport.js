const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Account = require("../models/Account");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "username" },
      (username, password, done) => {
        Account.findOne({ username: username })
          .then((account) => {
            if (!account) {
              return done(null, false, {
                message: "That email is not registered",
              });
            }
            if (account.password != password) {
              return done(null, false, {
                message: "That password is incorrect",
              });
            } else {
                return done(null, account)
            } 
            
          })
          .catch((err) => console.log(err));
      }
    )
  );
  passport.serializeUser((Account, done) => {
    done(null, Account.id);
  });

  passport.deserializeUser((id, done) => {
    Account.findById(id, (err, Account) => {
      done(err, Account);
    });
  });
};
