import { RECEIVE_EVENTS, RECEIVE_EVENT } from '../actions/event_actions'

const EventsReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = Object.assign({}, state)
	switch (action.type) {
		case RECEIVE_EVENTS:
			action.events.data.forEach(event => (newState[event._id] = event))
			return newState
		case RECEIVE_EVENT:
			newState[action.event.data._id] = action.event.data
			return newState
		default:
			return state
	}
}

export default EventsReducer
