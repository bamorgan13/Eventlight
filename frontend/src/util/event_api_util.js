import axios from 'axios'

export const getEvents = filters => {
  return axios.get('/api/events', { params: { ...filters } })
}

export const getLikedEvents = () => {
  return axios.get('/api/likes')
}

export const getRegistrations = () => {
  return axios.get('/api/registrations')
}

export const getEvent = _id => {
  return axios.get('/api/events/:id', { params: { _id } })
}

export const fetchEventsAutocomplete = filter => {
	return axios.get("/api/events/auto", { params: { ...filter } });
}