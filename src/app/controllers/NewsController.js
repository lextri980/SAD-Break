class NewsController {

    //GET /news
    index(req,res){
        res.render('authentication/login')
    }
}

module.exports = new NewsController;