const Account = require("../models/Account");
const { mulMongooseTO } = require("../../util/mongoose");
const passport = require('passport')

class LoginController {
  //GET /login
  login(req, res,next) {
    res.render("login", { layout: false });
  }

  //POST /login/store
  store(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/home',
      failureRedirect: '/login',
      failureFlash: true
    }) (req, res, next)
  }
}
module.exports = new LoginController();
