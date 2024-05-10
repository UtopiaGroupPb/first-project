require('dotenv').config();

const routes = require('./routes/routes');
const express = require('express');

const configureServer = (server) => {
    server.use(express.json());
    server.use(routes);
};

module.exports = configureServer;