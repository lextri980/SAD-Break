const Account = require("../models/Account");

class AuthenticationController {
  //GET /authentication/login
  login(req, res, next) {
    res.render("authentication/login", { layout: false });
  }

  //GET /authentication/signup
  signup(req, res, next) {
    res.render("authentication/signup", { layout: false });
  }

  }
module.exports = new AuthenticationController();
