import { useDispatch, useSelector } from 'react-redux'

import EmailIcon from '@mui/icons-material/Email'
import Phone from '@mui/icons-material/Phone'
import Assignment from '@mui/icons-material/Assignment'
import LocationOn from '@mui/icons-material/LocationOn'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import types from '../state/types'
import userActions from '../state/actions/user.action'

export default function Email ({email, city, phone, profession}) {
	let dispatch = useDispatch()
	let action = useSelector(state => state.action)

	// form state
	let [formData, setFormData] = useState({email, city, phone, profession})
	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})
	let normalElements = {
		email: <Typography variant='body1' component={'p'}>{email}</Typography>,
		city: <Typography variant='body1' component='p'>{city}</Typography>,
		phone: <Typography variant='body1' component='p'>{phone}</Typography>,
		profession: <Typography variant='body1' component='p'>{profession}</Typography>,
	}
	let formElements = {
		email: <TextField onChange={onChange} name='email' label="Email" variant="outlined" defaultValue={email} />,
		city:	<TextField onChange={onChange} name='city' label="City" variant="outlined" defaultValue={city} />,
		phone: <TextField onChange={onChange} name='phone' label="Phone" variant="outlined" defaultValue={phone} />,
		profession: <TextField onChange={onChange} name='profession' label='Profession' variant='outlined' defaultValue={profession} />,
		save:	<Button variant='contained' fullWidth onClick={() => save(dispatch)}>Save</Button>
	}

	const save = dispatch => {
		dispatch(userActions.editUser(formData))
		dispatch({
			type: types.setView
		})
	}

	return(
		<Grid container spacing={3}>
			<Grid item xs={12} md={6}>
				<EmailIcon/>
				{action === 'edit' ? formElements.email : normalElements.email}
			</Grid>

			<Grid item  xs={12} md={6}>
				<LocationOn/>
					{action === 'edit' ? formElements.city : normalElements.city}
			</Grid>

			<Grid item  xs={12} md={6}>
				<Phone/>
				{action === 'edit' ? formElements.phone : normalElements.phone}
			</Grid>

			<Grid item  xs={12} md={6}>
				<Assignment/>
				{action === 'edit' ? formElements.profession : normalElements.profession}
			</Grid>

			{action === 'edit' && 
				<Grid item  xs={12}>
					{formElements.save}
				</Grid>}

		</Grid>
	)
}