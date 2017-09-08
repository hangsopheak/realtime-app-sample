"use Strict";
var pool = require('../config/database').Pool;

exports.insertPost = function(post){
	return new Promise(function(resolve, reject){
        var sql = 'INSERT INTO posts( `description`, `user_id`, `image`)\
                    VALUES(?, ?, ?)';
		pool.getConnection(function(err, connection){
			connection.query(sql,[ post.description, post.user_id, post.image], function(err, result){
                var post = getPostById(result.insertId);
                resolve(post);
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

exports.getPostById = getPostById;

function getPostById(id){
    return new Promise(function(resolve, reject){
        var sql = 'SELECT * FROM posts WHERE id = ?';
		pool.getConnection(function(err, connection){
			connection.query(sql, [id], function(err, posts){
                var post = null;
                if(posts.length == 1){
                    post = posts[0];    
                }
				resolve(post);
				connection.release();	
			})
		});
	});
}

