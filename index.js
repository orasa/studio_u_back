//install express and import it here
//install dotenv
//assign express to app so we can use it to create route
const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
require('./db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/category', require('./controllers/post_category'));
app.get('/api/categories', require('./controllers/get_categories'));

app.post('/api/signup', require('./controllers/signup'));
app.post('/api/login', require('./controllers/login'));

app.get('/api/users', require('./controllers/get_users'));

app.post('/api/video', require('./controllers/post_video'));
app.get('/api/videos', require('./controllers/get_videos'));

//update user likes on video, id is video's id
app.patch('/api/videos/:id', require('./controllers/patch_video'));

// app.post('/api/message', require('./controllers/post_message'))
// app.get('/api/messages', require('./controllers/get_messages'))

app.listen(process.env.PORT, err => {
	if (err) {
		console.log('ERROR:', err);
	} else {
		console.log(`Listen on port ${process.env.PORT}`);
	}
});
