import React from "react";

class ManageEvents extends React.Component {
  componentWillMount() {
    this.props.fetchCurrentUsersEvents(this.props.currentUser.id);
  }

  render() {
    if (!this.props.currentUsersEvents) return null;
    const currentUserEventItems = Object.values(this.props.currentUsersEvents).map( event => 
      <li>
        {event.title}
      </li>  
    )

    return (
      <div>
        <h1>Manage Events</h1>
        <div>
          <ul>
            {currentUserEventItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default ManageEvents;