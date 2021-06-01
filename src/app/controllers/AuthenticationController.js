class AuthenticationController {

    //GET /news
    login(req,res){
        res.render('authentication/login', {layout: false})
    }
}

module.exports = new AuthenticationController;