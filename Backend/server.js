const express = require("express");
const app = require('./app');
const http = require("http");

const PORT = process.env.PORT || 3000;

const Server = http.createServer(app);

Server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
