const express = require('express');
const router = express.Router();
const GalleryPage = require('../models/GalleryPage');

function adminCheck (req, res, next) {
  if (!req.user.admin) {
    res.status(401).send('Not Authorized');
  } else {
    next();
  }
};

//GET IMAGES
//QUERY PARAMS: ?page=1&limit=10&category=animals&sort=-views

router.get('/', function(req, res) {
  var search = {};
  if (req.query.category) {
    search.category = req.query.category;
  }
  var skip = ( (+req.query.page || 1) - 1) * (req.query.limit || 10);
  var countQuery = GalleryPage.count( search );
  var documentQuery = GalleryPage.find( search )
    .skip( skip )
    .limit(req.query.limit || 10)
    .sort(req.query.sort || 'title');
  Promise.all([countQuery, documentQuery])
    .then( results => {
      res.send({
        count: results[0],
        images: results[1]
      });
    })
    .catch( err => {
      console.log(err);
      res.status(500).send('error occurred');
    });
});

router.get('/:image_id', function(req, res) {
  GalleryPage.findById(req.params.image_id)
  .then( img => {
    res.send(img);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  });
});

router.post('/', adminCheck, function(req, res) {
  var newPage = new GalleryPage({
    title: req.body.title,
    category: req.body.category,
    svg: req.body.svg,
    views: 0
  });
  newPage.save()
  .then( savedPage => {
    res.send(savedPage);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  });
});

router.patch('/:image_id', adminCheck, function(req, res) {
  GalleryPage.findOneAndUpdate({_id: req.params.image_id}, req.body, {new: true})
  .then( updatedPage => {
    res.send(updatedPage);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  });
});

router.delete('/:image_id', adminCheck, function(req, res) {
  GalleryPage.findByIdAndRemove(req.params.image_id)
  .then( () => {
    res.send('delete success');
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  });
});

module.exports = router;
