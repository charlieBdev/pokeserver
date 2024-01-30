const { selectScores, insertScore } = require('../models/scores.models');

exports.getScores = async (_, res) => {
	try {
		const scores = await selectScores();
		res.status(200).json(scores);
	} catch (e) {
		console.error(e.message);
		res.status(500).send('Internal Server Error');
	}
};

exports.postScore = async (req, res) => {
	const { name, score } = req.body;

	try {
		const postedScore = await insertScore(name, score);
		res.status(200).json(postedScore);
	} catch (e) {
		console.error(e.message);
		res.status(500).send('Internal Server Error');
	}
};
