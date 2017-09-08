"use Strict";
var pool = require('../config/database').Pool;

exports.getUser = function(id){
	return new Promise(function(resolve, reject){
		var sql = 'SELECT * FROM users WHERE id = ?';
		pool.getConnection(function(err, connection){
			connection.query(sql,[id], function(err, user){
				console.log(user);
				resolve(user);
				connection.release();	
			})
		});
	});
}


exports.getAllUsers = function(){
	return new Promise(function(resolve, reject){
		var sql = 'SELECT * FROM users';
		pool.getConnection(function(err, connection){
			connection.query(sql, function(err, users){
				console.log(users);
				resolve(users);
				connection.release();	
			})
		});
	});
}

