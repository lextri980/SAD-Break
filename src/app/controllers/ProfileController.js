const Course = require('../models/Course')
const {mulMongooseTO} = require('../../util/mongoose')

class ProfileController {

    //GET /teacher
    index(req, res, next){
        res.render('profile')
    }

}

module.exports = new ProfileController;