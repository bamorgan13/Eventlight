import React from 'react'
import { withRouter } from 'react-router-dom'
import EventIndexItem from './event_index_item'
import EventIndexItemWithDate from './event_index_item_w_date'
import LikeInSquareWithDate from '../likes/likes_in_square'
import SearchBarContainer from "../search/search_bar_container"
import '../../styles/event_index.css'

class EventIndex extends React.Component {
  componentWillMount() {
    this.props.fetchEvents(this.props.searchFilters)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchFilters !== nextProps.searchFilters) {
      this.props.fetchEvents(nextProps.searchFilters);
    }
  }

  render() {
    const indexType = this.props.location.pathname === "/" ? "grid" : "list";
    const searchBar = this.props.location.pathname === "/events" ? <SearchBarContainer /> : null;
    let eventIndexListClass = "";
    if (this.props.location.pathname === "/events" || this.props.location.pathname === "/likes") {
      eventIndexListClass = "event-index-list__main-index"
    }

    if (this.props.events.length === 0) {
      return <div className="no-events-found">No Events Found</div>
    } else {
      return (
        <div className="event-index-wrapper">
          {searchBar}
          <ul className={`event-index-${indexType} ${eventIndexListClass}`}>
            {this.props.events.map(event =>
              this.props.useDateComponent ? (
                <EventIndexItemWithDate key={event._id} event={event} />
              ) : this.props.useSquareComponent ? (
                <LikeInSquareWithDate key={event._id} event={event} />
              ) : (
                <EventIndexItem key={event._id} event={event} />
              )
            )}
          </ul>
        </div>
      )
    }
  }
}

export default withRouter(EventIndex)
