const Course = require('../models/Course')
const {mulMongooseTO} = require('../../util/mongoose')

class HomeController {

    //GET /home
    index(req, res, next){

        Course.find({})
            .then(courses => res.render('home', {
                courses: mulMongooseTO(courses)
            }))
            .catch(next)
    }

    //GET /home/list
    list(req, res, next){
        Course.find({})
            .then(courses => res.render('list', {
                courses: mulMongooseTO(courses)
            }))
            .catch(next)
    }
}

module.exports = new HomeController;