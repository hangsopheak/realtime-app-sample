"use Strict";
var pool = require('../config/database').Pool;

exports.insertComment = function(comment){
	return new Promise(function(resolve, reject){
        var sql = 'INSERT INTO comments(`id`, `description`, `user_id`, `post_id`, `created_on`)\
                    VALUES(?, ?, ?, ?, ?, ?)';
		pool.getConnection(function(err, connection){
			connection.query(sql,[comment.id, comment.description, comment.user_id, comment.post_id, comment.created_on], function(err, result){
				console.log(result);
				resolve(result);
				connection.release();	
			})
		});
	});
}

exports.getCommentsByPost = function(commentId){
	return new Promise(function(resolve, reject){
        var sql = 'SELECT * FROM comments WHERE status = 1 AND post_id = ?';
		pool.getConnection(function(err, connection){
			connection.query(sql, [postId] ,function(err, comments){
				resolve(comments);
				connection.release();	
			})
		});
	});
}