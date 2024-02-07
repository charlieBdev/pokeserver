const http = require('https');
const cron = require('node-cron');

const cronJob = () => {
	return cron.schedule('59 /14 * * * *', () => {
		http.get('https://pokeserver-nt3v.onrender.com', () => {
			console.log('Pinged!');
		});
	});
};

module.exports = cronJob;
