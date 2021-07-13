const Account = require("../models/Account");
const { mulMongooseTO } = require("../../util/mongoose");
const scripts = [{ script: "js/signup.js" }];

class SignupController {
  //GET /signup
  signup(req, res, next) {
    res.render("signup", { layout: false});
  }

  //POST /signup/store
  store(req, res, next) {
    const { username, password } = req.body;
    let errors = [];

    if (!username || !password) {
      errors.push({ msg: "plz fill in all fields" });
    }
    if (password.length < 6) {
      errors.push({ msg: "Pw should be at least 6 characters" });
    }
    if (errors.length > 0) {
      res.render("signup", {
        layout: false,
        errors,
        username,
        password,
      });
    } else {
      Account.findOne({username: username})
      .then(account => {
        if(account) {
          //username exist
          errors.push({msg: 'This username is already exist'})
          res.render("signup", {
            layout: false,
            errors,
            username,
            password,
          })
        } else {
          const account = new Account(req.body)
          account.save()
            .then(account => {
              req.flash('success_msg', 'You are now registered and can login')
              res.redirect('/login')
            })
            .catch(next)
        }
      })
      .catch(next)
    }
    
  }
}
module.exports = new SignupController();
