const express = require('express');

const helpers = require('../games/gamesModel');

const server = express();

server.use(express.json());

const games = [];
  

server.get('/', async (req, res) => {
	res.status(200).json({ api: 'up' });
});

// POST /games
server.post("/games", (req, res) => {
	const { title, genre, releaseYear } = req.body;
	const game = { title, genre, releaseYear };
	const newGames = [...games, game];

	if (!title || !genre) {
		res
			.status(422)
			.json({ error: "Missing a title or genre, they are required" });
	} else {
		res.status(201).json(newGames);
	}
});

  // GET /games
  server.get('/games', async (req, res) => {
	const games = await helpers.getAll();
  
	res.status(200).json({ games });
  });

module.exports = server;