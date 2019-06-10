import React from "react";
import ManageEventsItem from "./manage_events_item";
import "../../styles/manage_events.css";

class ManageEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liveTab: "active", pastTab: "inactive" };

    this.toggleSelectedTab = this.toggleSelectedTab.bind(this);
  }

  componentWillMount() {
    this.props.fetchCurrentUsersEvents(this.props.currentUser.id);
  }

  toggleSelectedTab(tab) {
    return event => {
      if (tab === "live") {
        this.setState({ liveTab: "active", pastTab: "inactive" });
      } else {
        this.setState({ liveTab: "inactive", pastTab: "active" });
      }
    };
  }

  render() {
    if (!this.props.currentUsersEvents) return null;
    const currentUserEventItems = Object.values(this.props.currentUsersEvents);
    const manageEventItemsLive = currentUserEventItems
      .filter( event => new Date(event.start_date).getTime() > Date.now() )
      .map( event => <ManageEventsItem key={event._id} event={event}/>);
    const manageEventItemsPast = currentUserEventItems
      .filter( event => new Date(event.start_date).getTime() < Date.now() )
      .map( event => <ManageEventsItem key={event._id} event={event}/>);
    let manageEventItems;
    if (this.state.liveTab === "active") {
      manageEventItems = ( manageEventItemsLive.length ? manageEventItemsLive : <li className="manage-events-list-item-none">You don't have any live events</li>);
    } else {
      manageEventItems = ( manageEventItemsPast.length ? manageEventItemsPast : <li className="manage-events-list-item-none">You don't have any past events</li>);
    }

    return (
      <div className="manage-events-container">
        <h1>Manage Events</h1>
        <div className="manage-events-header-container">
          <ul className="manage-events-header-list">
            <li className={`manage-events-header-list-item manage-events-header-list-item-${this.state.liveTab}`} onClick={this.toggleSelectedTab("live")}>
              <a>Live <span>{manageEventItemsLive.length}</span></a>
            </li>
            <li className={`manage-events-header-list-item manage-events-header-list-item-${this.state.pastTab}`} onClick={this.toggleSelectedTab("past")}>
              <a>Past <span>{manageEventItemsPast.length}</span></a>
            </li>
          </ul>
        </div>
        <div className="manage-events-list-container">
          <ul className="manage-events-list">
            {manageEventItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default ManageEvents;