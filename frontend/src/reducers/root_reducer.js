import { combineReducers } from 'redux'
import session from './session_api_reducer'
import errors from './errors_reducer'
import events from './events_reducer'
import UiReducer from "./ui_reducer";

const RootReducer = combineReducers({
	session,
	events,
	errors,
	ui: UiReducer
})

export default RootReducer
