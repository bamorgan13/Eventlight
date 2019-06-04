import React from 'react'
import { withRouter } from 'react-router-dom'
import EventIndexItem from './event_index_container'

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
		this.setState({ events: newState.events })
	}

	render() {
		if (this.state.events.length === 0) {
			return <div>There are no events</div>
		} else {
			return (
				<ul className="event-index-list">
					{this.state.events.map(event => <EventIndexItem key={event.id} event={event} />)}
				</ul>
			)
		}
	}
}

export default withRouter(EventIndex)
