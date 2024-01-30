const { getScores, postScore } = require('../controllers/scores.controllers');

const scoresRouter = require('express').Router();

scoresRouter.get('/', getScores).post('/', postScore);

module.exports = scoresRouter;
