const db = require('../db/connection');

exports.selectScores = async () => {
	try {
		const scores = await db.query(`
      SELECT * FROM scores;`);
		return scores.rows;
	} catch (e) {
		console.error('Error retrieving scores:', e);
		throw new Error('Internal Server Error');
	}
};

exports.insertScore = async (name, score) => {
	try {
		const postedScore = await db.query(
			`
    INSERT INTO scores (playerName, score) VALUES ($1, $2) RETURNING *`,
			[name, score]
		);
		return postedScore.rows[0];
	} catch (e) {
		console.error('Error posting score:', e);
		throw new Error('Internal Server Error');
	}
};
