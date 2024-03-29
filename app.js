const express = require('express');
const scoresRouter = require('./routes/scores-router');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (_, res) => {
	res.send('Welcome to the Pokemon Quiz API!');
});

app.use('/scores', scoresRouter);

module.exports = app;
