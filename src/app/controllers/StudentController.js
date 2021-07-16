const Course = require('../models/Course')
const {mulMongooseTO} = require('../../util/mongoose')

class StudentController {

    //GET /teacher
    index(req, res, next){
        res.render('student')
    }

}

module.exports = new StudentController;