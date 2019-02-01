const express = require("express");
const server = express();
const data = require("/db.js");

server.use(express.json());

module.exports = server;
