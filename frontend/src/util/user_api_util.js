import axios from 'axios'

export const toggleLikeEvent = id => {
  return axios.post(`/api/likes/`, {
    event_id: id
  })
}
