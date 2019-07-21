const db_choice = require('../models/choice')

module.exports = (req, res) => {
	db_choice.create(req.body).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
