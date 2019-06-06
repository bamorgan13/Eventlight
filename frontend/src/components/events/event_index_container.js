import { connect } from 'react-redux'
import { fetchEvents } from '../../actions/event_actions'
import EventIndex from './event_index'

const msp = state => {
	return {
		events: Object.values(state.events)
	}
}

const mdp = dispatch => {
	return {
		fetchEvents: () => dispatch(fetchEvents())
	}
}

export default connect(msp, mdp)(EventIndex)