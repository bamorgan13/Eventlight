import React from 'react'
import { connect } from 'react-redux'
import Avatar from './avatar'

const mstp = state => ({
  user: state.session.user
})

const Profile = ({ user }) => {
  const name_array = user.full_name.split(' ')
  const name = name_array
    .map((name, idx) => {
      if (idx === name_array.length - 1) return name.toUpperCase()
      return name
    })
    .join(' ')
  let num_tickets = user.registrations.length
  num_tickets = num_tickets + (num_tickets === 1 ? ' ticket' : ' tickets')
  let num_likes = user.liked_events.length
  num_likes = num_likes + (num_likes === 1 ? ' like' : ' likes')

  return (
    <div className="profile">
      <Avatar user={user} />
      <div>
        <div className="name-line">
          <h1>{name}</h1>
          <i className={`fas fa-pencil-alt`} />
        </div>
        <div className="summary">
          <span>{num_tickets}</span>&bull;<span>{num_likes}</span>
        </div>
      </div>
    </div>
  )
}

export default connect(mstp)(Profile)
