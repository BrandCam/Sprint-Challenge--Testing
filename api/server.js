const express = require("express");
const server = express();
const db = require("./db.js");

server.use(express.json());

let checkIFExists = element => {
  return db.filter(obj => obj.title === element).length > 0;
};

// endpoints
server.get("/games", (req, res) => {
  res.status(200).json(db);
});

server.post("/games", (req, res) => {
  let { title, genre, releaseYear } = req.body;
  if (!title || !genre) {
    return res
      .status(422)
      .json({ error: "You must include a title and genre." });
  } else if (checkIFExists(title)) {
    return res.status(405).json({ message: `${title} already exists` });
  }

  db.push(req.body);
  return res.status(201).json({ message: `${title} added to games database.` });
});
module.exports = server;
