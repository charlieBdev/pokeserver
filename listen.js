const app = require('./app');
const cronJob = require('./pinger/pinger');

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`);
});

if (process.env.NODE_ENV === 'production') {
	cronJob().start();
}
