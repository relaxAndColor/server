const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//holds edited svg images

const UserPage = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  svg: {
    type: String,
    require: true
  },
  original: {type: mongoose.Schema.Types.ObjectId, ref: 'GalleryPage'}
}, {
  timestamps: true
});

module.exports = mongoose.model('UserPage', UserPage);
