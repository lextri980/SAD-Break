const Account = require('../models/Account')
const {mulMongooseTO} = require('../../util/mongoose')


class AccountController {

   //GET /announce
   show(req,res,next){
    Account.find({})
    .then(accounts => res.render('account', {
        accounts: mulMongooseTO(accounts)
    }))
    .catch(next)
}
}

module.exports = new AccountController;