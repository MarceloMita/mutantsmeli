const { expect } = require('chai');
const request = require('supertest');

const app = require('..');
let server;

before(done => {
  console.log(app);
  server = app.listen(8080, done);
});

after(done => {
  server.close(done);
});

describe('Mutants controller', () => {
  describe('POST /mutant', () => {
    it('should respond error when dna not passed', () => {
      request(app).post('/mutant').end((err, res) => {
        console.log(err, res);
        done();
      });
    }).timeout(10000);
  });
});