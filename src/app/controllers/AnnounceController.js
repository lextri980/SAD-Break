const Announce = require('../models/Announcement')
const {mulMongooseTO} = require('../../util/mongoose')


class AnnounceController {

    //GET /announce
    index(req,res,next){
        Announce.find({})
            .then(announcements => res.render('announce', {
                announcements: mulMongooseTO(announcements)
            }))
            .catch(next)
    }

    //POST /announce
    store(req,res,next){
        const announce = new Announce(req.body)
        announce.save()
            .then(() => res.redirect('/announce'))
            .catch(next)
    }
}

module.exports = new AnnounceController;