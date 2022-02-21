import types from "../types";

const initialState = 'view'

const action = (state = initialState, {type, data}) => {
	switch (type) {
		case types.setEdit:
			return 'edit'
		case types.setView:
			return initialState
		default:
			return state
	}
}

export default action