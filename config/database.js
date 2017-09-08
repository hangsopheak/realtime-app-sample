var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit: 60,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'realtime',
	multipleStatements: true 
});

pool.on('error', function(err, client){
	if(err) throw err;
});

module.exports = {
	Pool: pool
};