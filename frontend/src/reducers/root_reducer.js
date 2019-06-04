import { combineReducers } from 'redux'
import session from './session_api_reducer'
import errors from './errors_reducer'
import events from './events_reducer'

const RootReducer = combineReducers({
	session,
	events,
	errors
})

export default RootReducer
