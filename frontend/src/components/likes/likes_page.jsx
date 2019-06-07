import EventIndex from '../events/event_index'
import React from 'react'
import '../../styles/like.css'
import { Link } from 'react-router-dom'

export default props => (
  <div className="likes-page">
    <div className="top-mini-nav">
      <i className="fas fa-chevron-left" />
      <Link to="/registrations">
        <span>Tickets</span>
      </Link>
    </div>
    <h1>Likes</h1>
    <EventIndex {...props} />
  </div>
)
