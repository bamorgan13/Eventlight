import { getEvents, getEvent, getLikedEvents, getRegistrations, postEvent } from '../util/event_api_util'

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const RECEIVE_LIKED_EVENTS = 'RECEIVE_LIKED_EVENTS'
export const RECEIVE_EVENT = 'RECEIVE_EVENT'
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS'
export const RECEIVE_REGISTRATIONS = 'RECEIVE_REGISTRATIONS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveEvents = events => ({
	type: RECEIVE_EVENTS,
	events
})

export const receiveLikedEvents = events => ({
	type: RECEIVE_LIKED_EVENTS,
	events
})

export const receiveRegistrations = events => ({
	type: RECEIVE_REGISTRATIONS,
	events
})

export const receiveEvent = event => ({
	type: RECEIVE_EVENT,
	event
})

export const receiveEventErrors = errors => ({
	type: RECEIVE_EVENT_ERRORS,
	errors
})

export const clearErrors = () => ({
	type: CLEAR_ERRORS
})

export const fetchEvents = filters => dispatch =>
	getEvents(filters)
		.then(events => dispatch(receiveEvents(events)))
		.catch(errors => dispatch(receiveEventErrors(errors.response.data)))

export const fetchEvent = id => dispatch =>
	getEvent(id)
		.then(event => dispatch(receiveEvent(event)))
		.catch(errors => dispatch(receiveEventErrors(errors.response.data)))

export const fetchLikedEvents = () => dispatch =>
	getLikedEvents()
		.then(events => dispatch(receiveLikedEvents(events)))
		.catch(errors => dispatch(receiveEventErrors(errors.response.data)))

export const fetchRegistrations = () => dispatch =>
	getRegistrations()
		.then(events => dispatch(receiveRegistrations(events)))
		.catch(errors => dispatch(receiveEventErrors(errors.response.data)))

export const createEvent = event => dispatch => {
	return postEvent(event)
		.then(event => dispatch(receiveEvent(event)))
		.catch(errors => dispatch(receiveEventErrors(errors.response.data)))
}
