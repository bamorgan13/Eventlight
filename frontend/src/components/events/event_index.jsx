import React from 'react'
import { withRouter } from 'react-router-dom'
import EventIndexItem from './event_index_item'

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
		const oldEventIds = pluck(this.state.events, '_id')
		const newEventIds = pluck(newState.events, '_id')
		if (this.state.events.length !== newState.events.length || !oldEventIds.every(id => newEventIds.includes(id))) {
			this.setState({ events: newState.events })
		}
	}

	render() {
		if (this.state.events.length === 0) {
			return <div>There are no events</div>
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

function pluck(arr, key) {
	return arr.map(obj => obj[key])
}
