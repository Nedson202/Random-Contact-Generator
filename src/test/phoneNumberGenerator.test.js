import '@babel/polyfill';
import fs from 'fs';
import chai from 'chai';
import request from 'supertest';
import app from '../index';
import {
  defaultRoute, getMinMaxMessage, generatedNumbersPath, fileEncoding,
  descendingOrder, ascendingOrder
} from '../utils';

const { expect } = chai;

describe('PhoneNumber generator API Integration Tests', () => {
  it('should get the minimum and maximum contact', (done) => {
    request(app)
      .get(`${defaultRoute}/min-max`)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).to.equal(200);
        expect(res.body.message).to.equal(getMinMaxMessage);
        done();
      });
  });

  it('should validate generated contacts for duplicates', (done) => {
    request(app)
      .get(`${defaultRoute}/validate-numbers`)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).to.equal(200);
        expect(res.error).to.equal(false);
        done();
      });
  });

  it('should generate all contacts', (done) => {
    request(app)
      .get(`${defaultRoute}/numbers`)
      .end((err, res) => { /* eslint-disable-line */
        if (err) done(err);
        const generatedContacts = fs.readFileSync(generatedNumbersPath, fileEncoding);
        expect(res.text).to.equal(generatedContacts);
        done();
      });
  });

  it('should retrieve all contacts based on descending order', (done) => {
    request(app)
      .get(`${defaultRoute}/order-contacts?order=${descendingOrder}`)
      .end((err, res) => { /* eslint-disable-line */
        if (err) done(err);
        const filePath = `src/generatedFiles/${descendingOrder}.txt`;
        const sortedContacts = fs.readFileSync(filePath, fileEncoding);
        expect(res.text).to.equal(sortedContacts);
        done();
      });
  });

  it('should retrieve all contacts based on ascending order', (done) => {
    request(app)
      .get(`${defaultRoute}/order-contacts?order=${ascendingOrder}`)
      .end((err, res) => { /* eslint-disable-line */
        if (err) done(err);
        const filePath = `src/generatedFiles/${ascendingOrder}.txt`;
        const sortedContacts = fs.readFileSync(filePath, fileEncoding);
        expect(res.text).to.equal(sortedContacts);
        done();
      });
  });
});
