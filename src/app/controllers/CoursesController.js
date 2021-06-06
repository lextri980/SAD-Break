const Course = require('../models/Course')
const {mongooseTO} = require('../../util/mongoose')

class CoursesController {

    //GET /courses/:slug
    show(req,res, next){
       Course.findOne({slug: req.params.slug})
            .then(courses => {
                res.render('courses/show', {
                    courses: mongooseTO(courses)
                })
            })
            .catch(next)
    }

    //GET /courses/create
    create(req,res, next){
        res.render('courses/create')
     }

     //POST /courses/store
    store(req,res, next){
        const course = new Course(req.body)
        course.save()
            .then(() => res.redirect('/home/list'))
            .catch(next)

        
     }
}

module.exports = new CoursesController;