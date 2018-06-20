const { expect } = require('chai');
const request = require('supertest');

const app = require('..');
const Mutant = require('../api/models/mutant');
let server;

before(done => {
  server = app.listen(3000, done);
});

after(done => {
  server.close(done);
});

describe('Mutants controller', () => {
  describe('POST /mutant', () => {
    it('should respond error when dna not passed', (done) => {
      request(app).post('/mutant').end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(400);
        expect(res.text).to.equal("DNA param must not be empty!");
        done();
      });
    }).timeout(10000);
    
    it('should respond error when dna is empty', (done) => {
      request(app).post('/mutant').send({"dna": []}).end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(400);
        expect(res.text).to.equal("DNA param must not be empty!");
        done();
      });
    }).timeout(10000);
    
    it('should respond 200 for mutant dna', (done) => {
      const mutantDna = ['AAAA', 'CCCC', 'TTTT', 'GGGG'];
      request(app).post('/mutant').send({ "dna": mutantDna }).end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        done();
      });
    }).timeout(10000);
    
    it('should respond 403 for human dna', (done) => {
      const humanDna = ['CATA', 'CAGC', 'TATA', 'GGGG'];
      request(app).post('/mutant').send({ "dna": humanDna }).end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(403);
        done();
      });
    }).timeout(10000);
  });
});