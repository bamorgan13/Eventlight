import { connect } from 'react-redux'
import { fetchEvent } from '../../actions/event_actions'
import EventShow from './event_show'

const msp = (state, ownProps) => {
	const eventId = ownProps.match.params.eventId
	return {
		eventId,
		event: state.events[eventId]
	}
}

const mdp = dispatch => {
	return {
		fetchEvent: id => dispatch(fetchEvent(id))
	}
}

export default connect(msp, mdp)(EventShow)
