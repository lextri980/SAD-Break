const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String},
    description: {type: String},
    image: {type: String},
    vidId: {type: String},
    level: {type: String},
    slug: { type: String, slug: 'name' }
  },{
      timestamps: true
  });

  module.exports = mongoose.model('courses', Course)