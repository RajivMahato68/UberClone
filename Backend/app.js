const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Example routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

module.exports = app;
