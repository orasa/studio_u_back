const db_user = require('../models/user')
const bcrypt = require('bcrypt')

//use pacakage ccrypt hash function to encrypt Password

module.exports = (req, res) => {

	bcrypt.hash(req.body.password, 10, (err, encrypted) => {
			  if (err) {
			res.status(300).send('Error:', err)
			  } else {
			 req.body.password = encrypted
			 db_user.create(req.body).then((data) => {
				res.send(data)
			 }).catch((err) => {
				res.send(err)
	 		})
		}
	})
}


//before encryption basic signup

// module.exports = (req, res) => {
// 	db_user.create(req.body).then((data) => {
// 		res.send(data)
// 	}).catch((err) => {
// 		res.send(err)
// 	})
// }
