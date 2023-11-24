import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index.js';
import createUser from '../../factories/user.js';
import resetDatabase from '../../config/reset.js'; // Fix the spelling here
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /users', () => {
  it('should return a status 200', async (done) => {
    const user = await createUser();
    console.log('The user object', user);
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.eql(user); // Use eql for deep equality
        done();
      });
  });

  // Add more test cases as needed
});
