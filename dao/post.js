"use Strict";
var pool = require('../config/database').Pool;

exports.insertPost = function(post){
	return new Promise(function(resolve, reject){
        var sql = 'INSERT INTO posts( `description`, `user_id`, `image`)\
                    VALUES(?, ?, ?)';
		pool.getConnection(function(err, connection){
			connection.query(sql,[ post.description, post.user_id, post.image], function(err, result){
				console.log(result);
				resolve(result);
				connection.release();	
			})
		});
	});
}

exports.getPosts = function(){
	return new Promise(function(resolve, reject){
        var sql = 'SELECT * FROM posts WHERE status = 1';
		pool.getConnection(function(err, connection){
			connection.query(sql, function(err, posts){
				resolve(posts);
				connection.release();	
			})
		});
	});
}