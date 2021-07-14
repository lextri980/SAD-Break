const Account = require("../models/Account");
const { mulMongooseTO } = require("../../util/mongoose");
const passport = require('passport')

class LogoutController {
  logout(req,res,next) {
    req.logout()
    req.flash('success_smg', 'You are logged out')
    res.redirect('/login')
  }
}
module.exports = new LogoutController();
