import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes/profile.js'

mongoose.connect('mongodb://localhost:27017/profile')
	.then(() => console.log('DB connected'))
	.catch(error => console.error(error))

const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }))

// if no user in the database, add one

import User from './models/User.js';

const user = {
	firstName: 'Osama',
	lastName: 'Samarrai',
	city: 'Famagusta',
	email: 'osamasamarrai@gmail.com',
	phone: '+905338442518',
	profession: 'Full-Stack Developer'
}

User.findOne().lean()
	.then(data => {
		if(!data)
			User.create(user)
	})

// routes

app.use('/api', routes)

// handle server response
app.use((data, req, res, next) => {
	let { status, payload } = data

	switch (status) {
		case 200:
			return res.json(data)
		case 500:
			return res.json({error: payload})
		default:
			break;
	}
})

app.listen(5000, () => console.log('Server is live on port 5000'))