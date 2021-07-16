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
      failureRedirect: '/login'
    }) (req, res, next)
  }
}
module.exports = new LoginController();
