const db_video = require('../models/video')

module.exports = (req, res) => {
	db_video.findByIdAndUpdate(req.body.params.id).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
