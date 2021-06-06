const homeRouter = require('./home')
const authenticationRouter = require('./authentication')
const newsRouter = require('./news')
const coursesRouter = require('./courses')


function route(app) {

    app.use('/home', homeRouter)
    app.use('/courses', coursesRouter)
    app.use('/news', newsRouter)
    app.use('/', authenticationRouter)

    
}
module.exports = route;