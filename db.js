const mongoose = require ('mongoose')


//connecting to mongodb use mongoose to connect look at .env file
// variable DATABASE_URL=mongodb://localhost:27017/unicorns so we can use process her

// mongoose.connect('mongodb://localhost:27017/slack03', {useNewUrlParser: true}, (err) => {
//move db to .env

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, (err) => {
	if (err) {
		console.log('Error:', err)
	} else {
		console.log('Connected to MongoDB')
	}
})

module.exports = mongoose
