//install express and import it here
//install dotenv
//assign express to app so we can use it to create route
const express = require('express')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')

// const cors = require('cors')
require('./db')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(cors())

//create route

app.post('/api/category', require('./controllers/post_category'))












app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log('ERROR:', err)
	} else {
		console.log('Listen on port ${process.env.PORT}')
	}
}
)
