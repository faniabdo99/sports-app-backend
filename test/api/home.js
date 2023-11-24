import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', () => {

  it('should return a status 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return a valid json', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.body).to.include({
          success: true,
          message: "The backend application is online, Check today's wisdom",
        });
        done();
      })
  });

  // TODO: Learn how to test wisdom of the day
});
