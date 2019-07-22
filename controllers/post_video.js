const db_video = require('../models/video')

module.exports = (req, res) => {
	db_video.create(req.body).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
