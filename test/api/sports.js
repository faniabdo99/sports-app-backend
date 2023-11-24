import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../../index.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /sports', () => {
  it('should return a status 200', (done) => {
    chai.request(app)
      .get('/sports')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('GET /sports/:id', () => {
  it('should return a status 404 if there is no sport', (done) => {
    chai.request(app)
      .get('/sports/INVALID_UUID')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
