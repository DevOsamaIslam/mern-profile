import express from 'express';
import User from '../models/User.js';

const router = express.Router()

router.get('/', async (req, res, next) => {
	try {
		let user = await User.findOne().lean()
		return next({
			status: 200,
			payload: user
		})
	} catch (error) {
		return next({
			status: 500,
			payload: error
		})
	}
})

router.patch('/', async (req, res, next) => {
	try {
		let {
			firstName,
			lastName,
			email,
			city,
			phone,
			profession
		} = req.body

		let user = await User.findOne()
		user.firstName = firstName || user.firstName
		user.lastName = lastName || user.lastName
		user.email = email || user.email
		user.city = city || user.city
		user.phone = phone || user.phone
		user.profession = profession || user.profession
		await user.save()
		console.log(user._doc);
		return next({
			status: 200,
			payload: user._doc
		})
	} catch (error) {
		return next({
			status: 500,
			payload: error
		})
	}
})


export default router