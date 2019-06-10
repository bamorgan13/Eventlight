import { connect } from 'react-redux'
import { createEvent } from '../../actions/event_actions'
import EventForm from './event_form'
import { fetchTypes } from '../../actions/type_actions'
import { fetchCategories } from '../../actions/category_actions'

const msp = state => {
	return {
		currentUser: state.session.user,
		availableTypes: state.types,
		availableCategories: state.categories,
		autocompleteCities: Object.values(state.ui.autocomplete.cities),
		event: {
			title: '',
			description: '',
			creator: state.session.user._id,
			organizer_name: '',
			organizer_description: '',
			start_date: '',
			end_date: '',
			location: {
				location_name: '',
				location_address: '',
				city: {
					city: '',
					state: ''
				}
			},
			online_url: '',
			price: '',
			category: '',
			type: '',
			capacity: '',
			image_url: ''
		}
	}
}

const mdp = dispatch => {
	return {
		submit: data => dispatch(createEvent(data)),
		fetchTypes: () => dispatch(fetchTypes()),
		fetchCategories: () => dispatch(fetchCategories())
	}
}

export default connect(msp, mdp)(EventForm)
