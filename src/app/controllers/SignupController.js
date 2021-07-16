const Account = require("../models/Account");
const { mulMongooseTO } = require("../../util/mongoose");

class SignupController {
  //GET /signup
  signup(req, res, next) {
    res.render("signup", {
      layout: false,
      seccess: req.session.success,
      errors: req.session.errors,
    });
    req.session.errors = null;
  }

  //POST /signup/store
  store(req, res, next) {
    const { username, name, password, password2 } = req.body;
    /*  check validator */
    // check('username', 'invalid username').isLength({min:3})
    // check('password', 'Passsword is invalid').isLength({min: 6})

    // const errors = validationResult(req);
    // if(errors){
    //   req.session.errors = errors
    //   req.session.success = false
    //   res.redirect('/signup')
    // } else {
    //   req.session.success = true
    //   res.json('successful')
    // }

    let errors = [];

    if (!username || !name || !password || !password2) {
      errors.push("error");
    }
    if (name.length < 3) {
      errors.push("error");
    }
    if (password.length < 6) {
      errors.push("error");
    }
    if (password !== password2) {
      errors.push("error");
    }
    if (errors.length > 0) {
      res.render("signup", {
        layout: false,
        errors,
        username,
        password,
      });
    } else {
      Account.findOne({ username: username })
        .then((account) => {
          if (account) {
            //username exist
            errors.push("error");
            res.render("signup", {
              layout: false,
              errors,
              username,
              password,
            });
          } else {
            const account = new Account(req.body);
            account
              .save()
              .then((account) => {
                res.redirect("/login");
              })
              .catch(next);
          }
        })
        .catch(next);
    }
  }
}
module.exports = new SignupController();
