var daoUser = require('../dao/user');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var users = daoUser.getAllUsers().then(
		(data) => {
			res.json(data);
		}
	);
  	
});

module.exports = router;
