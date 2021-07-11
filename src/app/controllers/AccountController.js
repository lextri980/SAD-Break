const Account = require("../models/Account");
const { mulMongooseTO } = require("../../util/mongoose");
const scripts = [{ script: "js/account.js" }];

class AccountController {
  //GET /account
  show(req, res, next) {
    // const PAGE_SIZE = 6;
    // let page = req.query.page;
    // if (page) {
    //   //get page
    //   page = parseInt(page);
    //   if (page < 1) {
    //     page = 1;
    //   }
    //   let skipNumber = (page - 1) * PAGE_SIZE;

    //   Account.find({})
    //     .skip(skipNumber)
    //     .limit(PAGE_SIZE)
    //     .then((accounts) =>
    //       res.render("account?page=1", {
    //         accounts: mulMongooseTO(accounts),
    //         scripts: scripts,
    //       })
    //     )
    //     .catch(next);

      
    // } else {
    // }

    Account.find({})
      .then((accounts) =>
        res.render("account", {
          accounts: mulMongooseTO(accounts),
          scripts: scripts,
        })
      )
      .catch(next);
  }

  //POST /account
  store(req, res, next) {
    const account = new Account(req.body);
    account
      .save()
      .then(() => res.redirect("/account"))
      .catch(next);
  }
}

module.exports = new AccountController();
