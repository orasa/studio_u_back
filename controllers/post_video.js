const db_video = require('../models/video')
const jwt = require('jsonwebtoken')


//add decript token and use as author on video create(post video)
module.exports = (req, res) => {

	//jwt.verify(take 3 params)

	console.log('req.body', req.body)

	let token = req.headers.authorization.split(' ')[1]
	jwt.verify(token, process.env.SECRET, (err, decoded) => {

		if (decoded) {
			console.log('decoded', decoded)
			req.body.user = decoded._id
			db_video.create(req.body).then((data) => {
				//populate user to get only name and email to display in front end
				db_video.findById(data._id)
					.populate({
						path: 'user',
						select: 'name email'
					}).then((video) => {
						res.send(video)
					}).catch((err) => {
						res.send(err)
					})

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
