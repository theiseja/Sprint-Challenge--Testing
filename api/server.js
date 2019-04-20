const express = require('express');

const games = require('../games/gamesModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ api: 'up' });
});

// Get all games

server.get('/games', async (req, res) => {
    const rows = await games.getAll();

    res.status(200).json(rows);
})