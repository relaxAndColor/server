const chai = require('chai');
require('dotenv').config();
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require( '../app' );
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

chai.use(chaiHttp);

describe('personal api', () => {

  var request;
  var galleryId;
  var personalId;

  before( function (done) {
    this.timeout(5000);
    mongoose.connection.open(process.env.DB_URI, () => {
      done();
    });
  });

  before( function(done) {
    chai.request(app)
      .post('/api/gallery')
      .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkaXNwbGF5TmFtZSI6IldoaXRuZXkgSGFydmV5IiwiX2lkIjoiNTZkZGZjYWUwNmU4YzFhMTEyZjE1MWI2IiwiYWRtaW4iOnRydWUsImlhdCI6MTQ1NzQ4MjAzMiwiZXhwIjoxNDU3ODI3NjMyfQ.HbXds3j1ndWVdZ41AW8ulJGioZnwaTkoZtjbdvCdBbk')
      .send({title: 'Circles', category: 'Animal', svg: '<svg></svg>'})
      .end( (err, res) => {
        galleryId = res.body._id;
        done();
      });
  });

  beforeEach( () => {
    request = chai.request( app );
  });

  it( 'POST: adds an SVG', function(done) {
    this.timeout(5000);
    request
      .post('/api/personal')
      .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkaXNwbGF5TmFtZSI6IldoaXRuZXkgSGFydmV5IiwiX2lkIjoiNTZkZGZjYWUwNmU4YzFhMTEyZjE1MWI2IiwiYWRtaW4iOnRydWUsImlhdCI6MTQ1NzQ4MjAzMiwiZXhwIjoxNDU3ODI3NjMyfQ.HbXds3j1ndWVdZ41AW8ulJGioZnwaTkoZtjbdvCdBbk')
      .send({original: galleryId})
      .end( (err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.svg).to.equal('<svg></svg>');
        personalId = res.body._id;
        done();
      });
  });

  it( 'GET: returns all my images', function(done) {
    this.timeout(5000);
    request
      .get('/api/personal')
      .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkaXNwbGF5TmFtZSI6IldoaXRuZXkgSGFydmV5IiwiX2lkIjoiNTZkZGZjYWUwNmU4YzFhMTEyZjE1MWI2IiwiYWRtaW4iOnRydWUsImlhdCI6MTQ1NzQ4MjAzMiwiZXhwIjoxNDU3ODI3NjMyfQ.HbXds3j1ndWVdZ41AW8ulJGioZnwaTkoZtjbdvCdBbk')
      .end( (err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.have.length.of.at.least(1);
        done();
      });
  });

  it( 'GET: returns one image', done => {
    request
      .get('/api/personal/' + personalId)
      .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkaXNwbGF5TmFtZSI6IldoaXRuZXkgSGFydmV5IiwiX2lkIjoiNTZkZGZjYWUwNmU4YzFhMTEyZjE1MWI2IiwiYWRtaW4iOnRydWUsImlhdCI6MTQ1NzQ4MjAzMiwiZXhwIjoxNDU3ODI3NjMyfQ.HbXds3j1ndWVdZ41AW8ulJGioZnwaTkoZtjbdvCdBbk')
      .end( (err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body._id).to.equal(personalId);
        done();
      });
  });

  it( 'PATCH: updates an image', done => {
    request
      .patch('/api/personal/' + personalId)
      .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkaXNwbGF5TmFtZSI6IldoaXRuZXkgSGFydmV5IiwiX2lkIjoiNTZkZGZjYWUwNmU4YzFhMTEyZjE1MWI2IiwiYWRtaW4iOnRydWUsImlhdCI6MTQ1NzQ4MjAzMiwiZXhwIjoxNDU3ODI3NjMyfQ.HbXds3j1ndWVdZ41AW8ulJGioZnwaTkoZtjbdvCdBbk')
      .send({svg: '<svg>Hello</svg>'})
      .end( (err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.svg).to.equal('<svg>Hello</svg>');
        done();
      });
  });

  it( 'DELETE: deletes an image', done => {
    request
      .delete('/api/personal/' + personalId)
      .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkaXNwbGF5TmFtZSI6IldoaXRuZXkgSGFydmV5IiwiX2lkIjoiNTZkZGZjYWUwNmU4YzFhMTEyZjE1MWI2IiwiYWRtaW4iOnRydWUsImlhdCI6MTQ1NzQ4MjAzMiwiZXhwIjoxNDU3ODI3NjMyfQ.HbXds3j1ndWVdZ41AW8ulJGioZnwaTkoZtjbdvCdBbk')
      .end( (err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  after( done => {
    mongoose.connection.close( () => {
      done();
    });
  });

});
