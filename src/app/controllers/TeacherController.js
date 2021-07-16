const Course = require('../models/Course')
const {mulMongooseTO} = require('../../util/mongoose')

class TeacherController {

    //GET /teacher
    index(req, res, next){
        res.render('teacher')
    }

}

module.exports = new TeacherController;