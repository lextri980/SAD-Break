const siteRouter = require('./site')
const authenticationRouter = require('./authentication')
const newsRouter = require('./news')


function route(app) {

    app.use('/', siteRouter)
    app.use('/authentication', authenticationRouter)
    app.use('/news', newsRouter)

    
      
      
    //   app.get("/login", (req, res) => {
    //     res.render('authentication/login', {layout: false});
    //   });
}
module.exports = route;