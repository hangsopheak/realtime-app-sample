var daoPost = require('../dao/post');

var app = require('express');
var router = app.Router();



module.exports= function(app,io) {
	
		//list post
		
		app.post('/post', function(req, res, next) {
				daoPost.insertPost(req.body).then(
					(data) => {
						res.json(data);
						io.emit('post value', data);
					}
				);
			});
		
		app.get('/posts', function(req, res, next) {
			daoPost.getPosts().then(
				(data) => {
					res.json(data);
				}
			);
		});	


}

