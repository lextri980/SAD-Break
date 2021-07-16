const Course = require('../models/Course')
const {mulMongooseTO} = require('../../util/mongoose')

class SubjectController {

    //GET /teacher
    index(req, res, next){
        res.render('subject')
    }

}

module.exports = new SubjectController;