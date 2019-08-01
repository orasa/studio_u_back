const db_video = require('../models/video')

module.exports = (req, res) => {
	db_video.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((data) => {

		const counts = 0
		 counts = req.params.id

		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
