import { connect } from 'react-redux'
import { createEvent } from '../../actions/event_actions'
import EventForm from './event_form'

const msp = state => {
	return {
		currentUser: state.session.user,
		availableTypes: state.types,
		availableCategories: state.categories
	}
}

const mdp = dispatch => {
	return {
		createEvent: data => dispatch(createEvent(data)),
		fetchTypes: () => dispatch(fetchTypes()),
		fetchCategories: () => dispatch(fetchCategories())
	}
}

export default connect(msp, mdp)(EventForm)
