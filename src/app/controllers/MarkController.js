const Course = require('../models/Course')
const {mulMongooseTO} = require('../../util/mongoose')

class MarkController {

    //GET /teacher
    index(req, res, next){
        res.render('mark')
    }

}

module.exports = new MarkController;