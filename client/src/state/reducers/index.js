import { combineReducers } from "redux";

import user from './user.reducer'
import action from './action.reducer'

export default combineReducers({
	user,
	action
})