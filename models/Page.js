const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//holds unedited svg images

const Page = new Schema({
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
  },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Page', Page);
