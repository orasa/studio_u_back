const db_category = require('../models/category')

module.exports = (req, res) => {
	db_category.create(req.body).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
