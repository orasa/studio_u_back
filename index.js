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
app.get('/api/category', require('./controllers/get_categories'))

// choice is display on content page

app.post('/api/choice', require('./controllers/post_choice'))
app.get('/api/choice',  require('./controllers/get_choices'))

app.post('/api/signup', require('./controllers/signup'))
app.post('/api/login', require('./controllers/login'))

app.get('/api/users', require('./controllers/get_users'))



app.post('/api/video', require('./controllers/post_video'))
app.get('/api/video', require('./controllers/get_video'))




// app.post('/api/message', require('./controllers/post_message'))
// app.get('/api/messages', require('./controllers/get_messages'))



app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log('ERROR:', err)
	} else {
		console.log('Listen on port ${process.env.PORT}')
	}
}
)
