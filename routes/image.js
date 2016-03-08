const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('authorized');
});

module.exports = router;

// Get all svg images
//   -Paged to 10 at a time by default
//   -Filterable

// Get someones personal gallery, what theyre working on

// Upload to all images/your own gallery

// Delete from your own gallery

// Get 1 image, add to your own gallery
