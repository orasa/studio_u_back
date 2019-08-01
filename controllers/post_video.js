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

			//log to see the body, in this case we want to access the url link property
			console.log(req.body);
			//check if the video link from user is exist on db
			//find in db if link: in db is the same as req.body.link(from browser)
			//then give back video or data from db, check if it is exist


			db_video.findOne({link: req.body.link}).then((video) => {
				//if video exists, respond 'this video is already exist'
				if(video) {
					res.send('this video is already present on the website')
				} else {
					//create the video in the database
					db_video.create(req.body).then((data) => {
						console.log('data from db_video.create', data);
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
			}).catch((err) => {
				res.send('This is err', err)
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
