import React from "react";
import ManageEventsItem from "./manage_events_item";
import "../../styles/manage_events.css";

class ManageEvents extends React.Component {
  componentWillMount() {
    this.props.fetchCurrentUsersEvents(this.props.currentUser.id);
  }

  render() {
    if (!this.props.currentUsersEvents) return null;
    const currentUserEventItems = Object.values(this.props.currentUsersEvents).map( event => <ManageEventsItem key={event._id} event={event}/>)

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