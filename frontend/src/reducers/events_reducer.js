import { RECEIVE_EVENTS } from '../actions/event_actions'

const EventsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_EVENTS:
      newState = {}
      action.events.data.forEach(event => (newState[event._id] = event))
      return newState
    default:
      return state
  }
}

export default EventsReducer
