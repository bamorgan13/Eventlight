import axios from 'axios'

export const getEvents = () => {
	return axios.get('/api/events')
}

export const getEvent = _id => {
	return axios.get('/api/events/:id', { params: { _id } })
}
