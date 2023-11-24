import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../../index.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /users', () => {
  it('should return a status 200', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('GET /users/:id', () => {
  it('should return a status 404 if there is no user', (done) => {
    chai.request(app)
      .get('/users/INVALID_UUID')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
