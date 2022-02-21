import types from "../types";
import axios from 'axios'

let userActions = {}
const BASEURL = 'http://localhost:5000/api/'

userActions.getUser = () => async dispatch => {
	try {
		let { data } = await axios.get(`${BASEURL}`)
		if(data && !data.payload.error) {
			dispatch({
				type: types.getUser,
				data: data.payload
			})
		}
	} catch (error) {
		console.error({error});
	}
}

userActions.editUser = info => async dispatch => {
	try {
		let { data } = await axios.patch(`${BASEURL}`, {
			...info
		})
		if(data && !data.payload.error) {
			dispatch({
				type: types.getUser,
				data: data.payload
			})
		}
	} catch (error) {
		console.error({error});
	}
}

export default userActions