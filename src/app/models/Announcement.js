const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Announcement = new Schema({
    name: {type: String},
    description: {type: String},
  },{
      timestamps: true
  });

  module.exports = mongoose.model('announcements', Announcement)