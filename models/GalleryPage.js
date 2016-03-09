const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//holds unedited svg images

const GalleryPage = new Schema({
  title: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  svg: {
    type: String,
    require: true
  },
  views: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model('GalleryPage', GalleryPage);
