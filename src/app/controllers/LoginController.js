const Account = require("../models/Account");
const { mulMongooseTO } = require("../../util/mongoose");

class LoginController {
  //GET /login
  login(req, res, next) {
    res.render("login", { layout: false });
  }

  //POST /login/store
  store(req, res, next) {
    const username = req.body.username
    const password = req.body.password


    Account.findOne({
      username: username,
      password: password
    })
    .then(data => {
      if(data){
        res.render('home')
      } else {
        res.send('This account has not been registered!!!')
      }
    })
    .catch(next)
  }


  

  }
module.exports = new LoginController();