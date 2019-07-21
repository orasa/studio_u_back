//install express and import it here
//install dotenv
//assign express to app so we can use it to create route
const express = require('express')
require('dotenv').config()
const app = express()

require('./db')

//create route
app.post('api/category', require('./controllers/category'))










app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log('ERROR:', err)
  } else {
    console.log('Listen on port ${process.env.PORT}')
  }
}
