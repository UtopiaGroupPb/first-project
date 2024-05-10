require("dotenv").config();

const configureServer = require('./config/config-server');
const express = require('express');
const server = express();

configureServer(server);

server.listen(process.env.PORT);