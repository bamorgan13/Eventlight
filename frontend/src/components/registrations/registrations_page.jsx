import React from 'react'
import '../../styles/registrations.css'
import Profile from '../users/profile'
import CurrentTickets from './current_tickets'
import PastTickets from './past_tickets'
import LikesOnRegistrationPage from '../likes/like_index_container'

export default props => (
  <div className="registrations-page">
    <Profile />
    <CurrentTickets />
    <PastTickets />
    <LikesOnRegistrationPage />
  </div>
)
