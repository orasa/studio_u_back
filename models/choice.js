//connect to mongodb data
const db = require('../db')
const mongoose = require('mongoose')

const db_choice = db.model('choice', {
	name: String
}
)

module.exports = db_choice
