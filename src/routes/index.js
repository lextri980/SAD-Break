const homeRouter = require('./home')
const loginRouter = require('./login')
const signupRouter = require('./signup')
const announceRouter = require('./announce')
const coursesRouter = require('./courses')
const accountRouter = require('./account')


function route(app) {

    app.use('/account',accountRouter)
    app.use('/home', homeRouter)
    app.use('/courses', coursesRouter)
    app.use('/announce', announceRouter)
    app.use('/signup', signupRouter)
    app.use('/login', loginRouter)

    
}
module.exports = route;