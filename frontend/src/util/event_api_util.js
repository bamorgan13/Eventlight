import axios from 'axios'

export const getEvents = () => {
  return axios.get('/api/events')
}

export const getLikedEvents = () => {
  return axios.get('/api/likes')
}

export const getEvent = _id => {
	return axios.get('/api/events/:id', { params: { _id } })
}

export const fetchEventsAutocomplete = filter => {
	return axios.get("/api/events/auto", { params: { ...filter } });
}