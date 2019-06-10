import { merge } from 'lodash'

import {
  RECEIVE_EVENTS,
  RECEIVE_LIKED_EVENTS,
  RECEIVE_CURRENT_USERS_EVENTS,
  RECEIVE_REGISTRATIONS,
  RECEIVE_EVENT
} from '../actions/event_actions'

const initialState = { all: {}, liked_events: {}, registrations: {} }

const EventsReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_EVENTS:
      newState['all'] = {}
      action.events.data.forEach(event => (newState['all'][event._id] = event))
      return newState
    case RECEIVE_EVENT:
      newState['all'][action.event.data._id] = action.event.data
      return newState
    case RECEIVE_LIKED_EVENTS:
      newState['liked_events'] = {}
      action.events.data.forEach(
        event => (newState['liked_events'][event._id] = event)
      )
      return newState
    case RECEIVE_CURRENT_USERS_EVENTS:
      newState["current_users_events"] = {}
      action.events.data.forEach(
        event => (newState['current_users_events'][event._id] = event)
    case RECEIVE_REGISTRATIONS:
      newState['registrations'] = {}
      action.events.data.forEach(
        event => (newState['registrations'][event._id] = event)
      )
      return newState
    default:
      return state
  }
}

export default EventsReducer
