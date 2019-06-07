import axios from 'axios'

export const getEvents = () => {
	return axios.get('/api/events')
}

export const fetchEventsAuto = filter => {
	return axios.get("/api/events/auto", { params: { ...filter } });
}