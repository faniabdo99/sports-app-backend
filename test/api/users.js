import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /users', () => {
  it('should return a status 200', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return an array', done => {
    chai.request(app)
    .get('/users')
    .end((err, res) => {
      expect(res).to.be.a('object');
      done();
    })
  })

  // Add more test cases as needed
});
