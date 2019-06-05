import React from 'react'
import { withRouter } from 'react-router-dom'
import EventIndexItem from './event_index_item'
import '../../styles/event_index.css'

class EventIndex extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			events: []
		}
	}

	componentWillMount() {
		this.props.fetchEvents()
	}

	componentWillReceiveProps(newState) {
		const oldEventIds = Object.keys(this.state.events)
		const newEventIds = Object.keys(newState.events)

		if (oldEventIds.length !== newEventIds.length || !oldEventIds.every(id => newEventIds.includes(id))) {
			this.setState({ events: newState.events })
		}
	}

	render() {
		if (this.state.events.length === 0) {
			return <div className="no-events-found">There are no events</div>
		} else {
			return (
				<ul className="event-index-list">
					{this.state.events.map(event => <EventIndexItem key={event._id} event={event} />)}
				</ul>
			)
		}
	}
}

export default withRouter(EventIndex)
