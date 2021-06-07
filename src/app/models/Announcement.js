const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Announcement = new Schema({
    name: {type: String},
    description: {type: String},
  },{
      timestamps: true
  });

  module.exports = mongoose.model('announcements', Announcement)