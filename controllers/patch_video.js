const db_video = require('../models/video')

module.exports = (req, res) => {
	db_video.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((data) => {

		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
