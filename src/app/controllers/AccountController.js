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

  //POST /account
  store(req,res,next){
    const account = new Account(req.body)
    account.save()
        .then(() => res.redirect('/account'))
        .catch(next)
}
}

module.exports = new AccountController();
