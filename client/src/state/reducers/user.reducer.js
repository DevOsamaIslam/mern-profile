import types from "../types";

const user = (state = {}, {type, data}) => {
	switch (type) {
		case types.getUser:
			return data
		case types.ediUser:
			return {...state, data}
		default:
			return state
	}
}

export default user