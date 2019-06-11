import axios from 'axios'

export const toggleLikeEvent = id => {
  return axios.post(`/api/likes/`, {
    event_id: id
  })
}

export const updateUser = user => {
  return axios.patch(`/api/users/${user.id}`, {
    user
  })
}
