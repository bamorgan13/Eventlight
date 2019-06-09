import React from "react";
import { Link } from "react-router-dom";
import "../../styles/manage_events.css";

class ManageEvents extends React.Component {
  componentWillMount() {
    this.props.fetchCurrentUsersEvents(this.props.currentUser.id);
  }

  render() {
    if (!this.props.currentUsersEvents) return null;
    const currentUserEventItems = Object.values(this.props.currentUsersEvents).map( event => 
      <li key={event._id} className="manage-events-list-item">
        <div className="manage-events-list-item-info">
          <h3><span>{event.title}</span></h3>
          <span>Date here once rich approves pull request</span>
          <ul className="manage-events-list-item-actions">
            <li className="manage-events-list-item-actions-icon"><i className="fas fa-cog"></i></li>
            <li className="manage-events-list-item-actions-text">Manage</li>
            <li className="manage-events-list-item-actions-icon"><i className="fas fa-pencil-alt"></i></li>
            <li className="manage-events-list-item-actions-text">Edit</li>
            <li className="manage-events-list-item-actions-icon"><i className="fas fa-external-link-alt"></i></li>
            <li className="manage-events-list-item-actions-text"><Link to={`/events/${event._id}`}>View</Link></li>
          </ul>
        </div>
        <div className="manage-events-list-item-capacity">{`0/${event.capacity}`}</div>
      </li>  
    )

    return (
      <div className="manage-events-container">
        <h1>Manage Events</h1>
        <div className="manage-events-list-container">
          <ul className="manage-events-list">
            {currentUserEventItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default ManageEvents;