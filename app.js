const mongoose = require('mongoose')
const express = require('express')
const app = express()
const db = require('./config/keys').mongoURI
const bodyParser = require('body-parser')
const users = require('./routes/api/users')
const events = require('./routes/api/events')
const cities = require('./routes/api/cities')
const passport = require('passport')

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB successfully'))
	.catch(err => console.log(err))

const port = process.env.PORT || 5000

app.use(passport.initialize())
require('./config/passport')(passport)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (_, res) => res.send('Eventlight all day'))
app.use('/api/users', users)
app.use('/api/events', events)
app.use('/api/cities', cities)

app.listen(port, () => console.log(`Server is running on port ${port}`))
