const db_user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//findOne() function to find if email exsist in our db.,
//pass user with that email as param, if user exist with email from request,
//then match password using bcrypt compare(),
//if password match use jwt sign() and convert user to object.

module.exports = (req, res) => {
	console.log(req.body);
	// 1. Check if email exists in db
	db_user
		.findOne({ email: req.body.email })
		.then(user => {
			if (user) {
				// 2. If email found, match passwords
				bcrypt.compare(req.body.password, user.password, (err, match) => {
					if (match) {
						// 4. If passwords match, res OK
						let token = jwt.sign(user.toObject(), process.env.SECRET);
						res.status(200).json({
							message: 'Congrats! you are logged in',
							token: token
						});
					} else {
						res.send('Sorry, invalid password');
					}
				});
			} else {
				res.send('Sorry, email not found');
			}
		})
		.catch(err => {
			res.status(300).send(err);
		});
};
