import assert from 'assert';
import express from 'express';
app = express();
describe('GET /', function () {
    before(() => {
        result = app.get('/')
    })
    it('should return a json object with wisdomOfTheDay', function (result) {
        console.log(result)
        assert.ok()
    });
});