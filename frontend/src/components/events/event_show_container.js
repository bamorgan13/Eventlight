import { connect } from 'react-redux'
import { fetchEvent } from '../../actions/event_actions'
import EventShow from './event_show'
import { isLiked } from '../../selectors'
import { toggleLikeEvent } from '../../actions/user_actions'

const msp = (state, ownProps) => {
	const eventId = ownProps.match.params.eventId
	return {
		eventId,
		event: state.events[eventId],
		isLiked: isLiked(state, eventId)
	}
}

const mdp = dispatch => {
	return {
		fetchEvent: id => dispatch(fetchEvent(id)),
		toggleLikeEvent: id => dispatch(toggleLikeEvent(id))
	}
}

export default connect(msp, mdp)(EventShow)
