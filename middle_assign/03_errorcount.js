const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

app.use(function (err, req, res, next) {
    res.status(404).send({});
    errorCount += 1;

});


app.get('/user', function (req, res) {
    throw new Error("User not found");
    // 500 -- default
    res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user ' });

});

app.get('/errorCount', function (req, res) {
    res.status(200).json({ errorCount });
})

// You have been given an express server which has a few endpoints.
// our task is to
//1. Enaure that if there is ever an exception , the end user see a status code of 404;
//2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint


// error handling middleware 


module.exports = app;
app.listen(3001);