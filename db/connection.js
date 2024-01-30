const { Pool } = require('pg');

const ENV = process.env.NODE_ENV || 'development';

const pathToCorrectEnvFile = `${__dirname}/../.env.${ENV}`;

// console.log(__dirname); // /Users/username/project-folder/db
// console.log(pathToCorrectEnvFile); // /Users/username/project-folder/.env.development

require('dotenv').config({
	path: pathToCorrectEnvFile,
});

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
	throw new Error('PGDATABASE or DATABASE_URL not set');
}

const config = {};

if (ENV === 'production') {
	config.connectionString = process.env.DATABASE_URL;
	config.max = 2;
}

module.exports = new Pool(config);
