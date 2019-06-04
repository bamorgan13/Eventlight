const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');

const sample_route_group = require('./routes/api/sample_route_group');

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB successfully'))
	.catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (_, res) => res.send('Eventlight all day'));
app.use('/api/sample_route', sample_route_group);

app.listen(port, () => console.log(`Server is running on port ${port}`));
