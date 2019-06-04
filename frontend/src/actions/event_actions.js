import { getEvents } from '../util/event_api_util'

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveEvents = events => ({
	type: RECEIVE_EVENTS,
	events
})

export const receiveEventErrors = errors => ({
	type: RECEIVE_EVENT_ERRORS,
	errors
})

export const clearErrors = () => ({
	type: CLEAR_ERRORS
})

export const fetchEvents = () => dispatch =>
	getEvents()
		.then(events => dispatch(receiveEvents(events)))
		.catch(errors => dispatch(receiveEventErrors(errors)))
