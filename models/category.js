//connect to mongodb data
const db = require('../db')
const mongoose = require('mongoose')

const db_category = db.model('category', {
  name: String
 }
)

module.exports = db_category
