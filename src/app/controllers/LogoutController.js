


class LogoutController {
  logout(req,res,next) {
    req.logout()
    res.redirect('/login')
  }
}
module.exports = new LogoutController();
