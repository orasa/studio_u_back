//connect to mongodb data
const db = require('../db')
const mongoose = require('mongoose')


const db_video = db.model('video', {

	link: {
		type: String,
		required: [true, 'Link url is required']
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'category',
		required: [true, 'video category is required']
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: [true, 'user is required']
	},
	date: {
		type: Date,
		default: Date.now
	},
	description: {
		type: String,
		required: [true, 'description body is required']
	},
	fans: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user'
		}
	],
	likes: {
		type: Number,
		default: 0
	}
})

module.exports = db_video
