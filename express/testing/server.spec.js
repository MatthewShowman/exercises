// Tests can be paused by adding prefixing 'x' onto 'it'

const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('./server');
const expect = chai.expect;
chai.use(chaiHttp);

describe('Routes', () => { // This is just organization
    describe('/', () => { // This is just organization
        it('should return a status of 200 when successful', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it('should respond with the correct message', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.be.html;
                    expect(res.text).to.equal('Testing routes is awesome!');
                    done();
                });
        });
    });
    describe('/tacos', () => {  // This is just organization
        it('should return a status of 200 when successful', (done) => {
            chai.request(server)
                .get('/tacos')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it('should respond with the correct message', (done) => {
            chai.request(server)
                .get('/tacos')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.be.html;
                    expect(res.text).to.equal('...are delicious!');
                    done();
                });
        });
        it('should respond with the same object that was submitted', (done) => {
            chai.request(server)
                .post('/tacos')
                .send({ food: 'tacos' })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.be.json;
                    expect(res.body).to.deep.equal({ food: 'tacos' });
                    done();
                });
        });
    });
});