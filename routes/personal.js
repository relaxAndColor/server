const express = require('express');
const router = express.Router();
const GalleryPage = require('../models/GalleryPage');
const UserPage = require('../models/UserPage');

//GET ALL IMAGES
router.get('/', function(req, res) {
  UserPage.find({ user: req.user._id}).sort('-updatedAt').populate('original', 'title')
  .then( images => {
    res.send(images);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  });
});

//GET 1 IMAGE
router.get('/:image_id', function(req, res) {
  UserPage.findById(req.params.image_id)
  .then( img => {
    res.send(img);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  });
});

router.post('/', function(req, res) {
  var updateQuery = GalleryPage.update({_id: req.body.original}, { $inc: {views: 1} });
  var searchQuery = GalleryPage.findById(req.body.original);
  Promise.all([updateQuery, searchQuery])
  .then( images => {
    var newPage = new UserPage({
      user: req.user._id,
      svg: images[1].svg,
      original: req.body.original
    });
    return newPage.save();
  })
  .then( savedPage => {
    res.send(savedPage);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  });
});

router.patch('/:image_id', function(req, res) {
  UserPage.findOneAndUpdate({_id: req.params.image_id}, req.body, {new: true})
  .then( updatedPage => {
    res.send(updatedPage);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  });
});

router.delete('/:image_id', function(req, res) {
  UserPage.findByIdAndRemove(req.params.image_id)
  .then( () => {
    res.send('delete success');
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  });
});

module.exports = router;
