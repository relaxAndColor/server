const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join( __dirname, 'src/public' );
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');

const authFacebook = require('./routes/auth-facebook');
const authEmail = require('./routes/auth-email');
const user = require('./routes/user');
const gallery = require('./routes/gallery');
const personal = require('./routes/personal');

app.use(cors());
app.options('*', cors());

// Force HTTPS on Heroku
if (app.get('env') === 'production') {
  app.use(function(req, res, next) {
    var protocol = req.get('x-forwarded-proto');
    protocol == 'https' ? next() : res.redirect('https://' + req.hostname + req.url);
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use( express.static( publicPath ) );

var jwtCheck = jwt({
  secret: process.env.TOKEN_SECRET
});

app.use('/auth/facebook', authFacebook);
app.use('/auth/email', authEmail);
app.use('/api/user', jwtCheck, user);
app.use('/api/gallery', jwtCheck, gallery);
app.use('/api/personal', jwtCheck, personal);

app.use(function(err, req, res, next) {
  res.status(500).send(err);
});
app.use(function(req, res, next) {
  res.status(404).send('404, no page found: ' + req.url);
});


module.exports = app;
