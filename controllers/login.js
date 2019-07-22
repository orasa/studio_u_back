
const db_user = require('../models/user')
const bcrypt = require('bcrypt')


module.exports = (req, res) => {
	console.log(req.body)

	// 1. Check if email exists in db , pass param user
	db_user.findOne({email: req.body.email}).then((user) => {
		//if user exist
		if (user) {
		// 2. If email found, match passwords from client request login with password in db
			bcrypt.compare(req.body.password, user.password, (err, match) => {
				if (match) {
					// 4. If passwords match, res OK
					res.send('You are logged in')
				} else {
					res.send('Sorry, invalid password')
				}
			})
		} else {
			res.send('Sorry, email not found')
		}
	}).catch((err) => {
		res.status(300).send(err)
	})

}







// 	bcrypt.compare(req.body.password, db_user.find(db_user.password), (err, match) => {
// 		//1.check if password match to the one in the database
// 		if (match) {
// 			 // 2. If passwords matched, then use jwt sign function to convert the user info into token
// 			res.send('You are logged in')
// 			let token = jwt.sign(user.toObject(), '123')
//
// 			//use respons jason send respons back to client both massage and token at the same time
// 			res.json({
// 				message: 'Congrat!, You are logged in',
// 				token: token
// 			})
// 		} else {
// 			res.send('Invalid password')
// 		}
// 	})
// }
