var daoPost = require('../dao/post');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log(req.body);
	daoPost.insertPost(req.body).then(
		(data) => {
			res.json(data);
		}
	);
  	
});

/*
router.get('/posts', function(req, res, next) {
	daoPost.getPosts().then(
		(data) => {
			res.json(data);
		}
	);
  	
}); */
module.exports = router;
