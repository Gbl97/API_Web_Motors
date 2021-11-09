const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: 'localhost',
	database: 'teste_webmotors',
});

module.exports = connection;