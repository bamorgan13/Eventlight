import React from 'react'
import { withRouter } from 'react-router-dom'
import EventIndexItem from './event_index_item'
import '../../styles/event_index.css'

class EventIndex extends React.Component {
  componentWillMount() {
    this.props.fetchEvents(this.props.searchFilters)
  }

  render() {
    const indexType = this.props.location.pathname === "/" ? "grid" : "list";

    if (this.props.events.length === 0) {
      return <div className="no-events-found">There are no events</div>
    } else {
      return (
        <ul className={`event-index-${indexType}`}>
          {this.props.events.map(event => (
            <EventIndexItem key={event._id} event={event} />
          ))}
        </ul>
      )
    }
  }
}

export default withRouter(EventIndex)
