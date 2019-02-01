const express = require("express");
const server = express();
const data = require("./db.js");

server.use(express.json());

// endpoints
server.get("/games", (req, res) => {
  res.status(200).json(data);
});

server.post("/games", (req, res) => {
  let { title, genre, releaseYear } = req.body;
  if (!title || !genre) {
    return res
      .status(422)
      .json({ error: "You must include a title and genre." });
  }
  return res.status(201).json({ message: `${title} added to games database.` });
});
module.exports = server;
