const db_user = require('../models/user')

module.exports = (req, res) => {
	db_user.create(req.body).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
