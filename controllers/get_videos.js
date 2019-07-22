const db_video = require('../models/video')

module.exports = (req, res) => {
	let q = {}
	if (req.query && req.query.category) {
		q.category = req.query.category
	}
	db_video.find({}).populate({
		path: 'category',
		select: 'name'
	}).populate({
		path: 'user',
		select: 'name email'
	}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
