const db_video = require('../models/video')
const jwt = require('jsonwebtoken')


//add decript token and use as author on video create(post video)
module.exports = (req, res) => {

	//jwt.verify(take 3 params)

console.log('req.body', req.body)

	jwt.verify(req.body.token, process.env.SECRET, (err, decoded) => {
		if (decoded) {
			console.log('decoded', decoded)
			req.body.user = decoded._id
			db_video.create(req.body).then((data) => {
				res.send(data)
			}).catch((err) => {
				res.send(err)
			})
		}
	})
}






//Basic post video
// module.exports = (req, res) => {
// 	db_video.create(req.body).then((data) => {
// 		res.send(data)
// 	}).catch((err) => {
// 		res.send(err)
// 	})
// }
