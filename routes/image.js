const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

//GET IMAGES
//QUERY PARAMS: ?page=1&limit=10&category=animals&sort=-views

router.get('/', function(req, res) {
  var search = {};
  if (req.query.category) {
    search.category = req.query.category;
  }
  var skip = ( (+req.query.page || 1) - 1) * (req.query.limit || 10);
  var countQuery = Page.count( search );
  var documentQuery = Page.find( search )
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

router.post('/', function(req, res) {
  var newPage = new Page({
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

router.patch('/', function(req, res) {
  Page.findOneAndUpdate({_id: req.body.id}, req.body, {new: true})
  .then( updatedPage => {
    res.send(updatedPage);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  })
});

router.delete('/', function(req, res) {
  Page.findByIdAndRemove(req.body.id)
  .then( () => {
    res.send('delete success');
  })
  .catch( err => {
    console.log(err);
    res.status(500).send('error occurred');
  });
});

module.exports = router;
