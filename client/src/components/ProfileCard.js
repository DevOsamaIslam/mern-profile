import { useSelector, useDispatch } from 'react-redux'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import { orange } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import Divider from '@mui/material/Divider';
import { red } from '@mui/material/colors'

import Info from './Info'
import { Button } from '@mui/material'
import types from '../state/types'

const useStyles = makeStyles(theme => {
	return {
			card: {
				backgroundColor: '#ccc !important',
				padding: theme.spacing(2),
			},
			avatar: {
				backgroundColor: orange[900] + ' !important'
			},
			btnCancel: {
				backgroundColor: red[900] + ' !important'
			}
	}

})

const ProfileCard = () => {
	let dispatch = useDispatch()
	let user = useSelector(state => state.user)
	let action = useSelector(state => state.action)
	const classes = useStyles()
	return (
		<Card className={classes.card} elevation={5}>
			<CardHeader
				avatar={<Avatar className={classes.avatar}>{user.initials}</Avatar>}
				title={user.firstName + ' ' + user.lastName}
				action={
					<Button 
						variant='contained'
						onClick={() => dispatch({ type: action === 'view' ? types.setEdit : types.setView})}
						className={action === 'edit' && classes.btnCancel}
						>
						{action === 'view' ? 'Edit Profile' : 'Cancel'}
					</Button>
				}
			/>
			<Divider variant='inset' />
			<CardContent>
				<Info 
					email={user.email} 
					city={user.city} 
					phone={user.phone} 
					profession={user.profession}
					action={action}
				/>
			</CardContent>
		</Card>
	)
}

export default ProfileCard