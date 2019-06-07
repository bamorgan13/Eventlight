import axios from 'axios'

export const getEvents = () => {
  return axios.get('/api/events')
}

export const getLikedEvents = () => {
  return axios.get('/api/likes')
}
