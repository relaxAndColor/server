const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//holds edited svg images

const Gallery = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  svg: {
    type: String,
    require: true
  },
  original: {type: mongoose.Schema.Types.ObjectId, ref: 'Page'}
});

module.exports = mongoose.model('Gallery', Gallery);
