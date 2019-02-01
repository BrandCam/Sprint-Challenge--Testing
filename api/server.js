const express = require("express");
const server = express();
const data = require("./db.js");

server.use(express.json());

// endpoints
server.get("/games", (req, res) => {
  res.status(200).json(data);
});
module.exports = server;
