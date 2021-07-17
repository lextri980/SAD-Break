const Account = require("../models/Account");
const { mulMongooseTO } = require("../../util/mongoose");

class AccountController {
  //GET /account
  show(req, res, next) {
    Account.find({})
      .then((accounts) =>
        res.render("account", {
          accounts: mulMongooseTO(accounts),
        })
      )
      .catch(next);
  }

  //POST /account/store
  store(req, res, next) {
    const { username, name, cid, password, password2 } = req.body;

    /* Validator */
    let errors = [];
    if (!username || !name || !cid || !password || !password2) {
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
      res.render("account", {
        errors,
        username,
        name,
        cid,
        password,
      });
    } else {
      Account.findOne({ username: username })
        .then((account) => {
          if (account) {
            //username exist
            errors.push("error");
            res.render("account", {
              errors,
              username,
              name,
              cid,
              password,
            });
          } else {
            const account = new Account(req.body);
            account
              .save()
              .then(() => {
                res.redirect("/account");
              })
              .catch(next);
          }
        })
        .catch(next);
    }
  }
}

module.exports = new AccountController();
