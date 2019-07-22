const db_video = require('../models/video')

module.exports = (req, res) => {
	db_video.find({}).populate({
		path: 'category',
		select: 'name'
	}).populate({
		path: '',
		select: 'name email'
	}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
