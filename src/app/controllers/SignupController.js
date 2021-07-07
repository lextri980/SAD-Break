const Account = require("../models/Account");
const { mulMongooseTO } = require("../../util/mongoose");

class SignupController {
  //GET /signup
  signup(req, res, next) {
    res.render("signup", { layout: false });
  }

  //POST /signup/store
  store(req, res, next) {
    const account = new Account(req.body);
    const username = req.body.username;

    Account.findOne({
        username: username,
      })
      .then((data) => {
        if (data) {
          res.send('This account is existed')
          
        } else {
          account.save()
            .then(() => res.redirect("/login"))
            
            .catch(next);
        }
      });
  }
}
module.exports = new SignupController();
