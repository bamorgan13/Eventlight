import React from 'react'
import { connect } from 'react-redux'
import { updateEvent, fetchCurrentUsersEvents } from '../../actions/event_actions'
import EventForm from './event_form'
import { fetchTypes } from '../../actions/type_actions'
import { fetchCategories } from '../../actions/category_actions'

class EditEventForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = { event: this.props.event }
	}

	componentDidMount() {
		this.props.fetchCurrentUsersEvents()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.event && (!this.props.event || nextProps.event.eventId !== this.props.event.eventId)) {
			this.props.fetchCurrentUsersEvents().then(() => this.setState({ event: this.props.event }))
		}
	}

	render() {
		const {
			submit,
			fetchTypes,
			fetchCategories,
			fetchEvent,
			event,
			currentUserId,
			availableTypes,
			availableCategories
		} = this.props
		if (event && ![event.creator, event.creator._id].includes(currentUserId)) {
			this.props.history.push(`/events/${event._id}`)
		}
		return event ? (
			<EventForm
				event={event}
				submit={submit}
				fetchTypes={fetchTypes}
				fetchCategories={fetchCategories}
				fetchEvent={fetchEvent}
				availableTypes={availableTypes}
				availableCategories={availableCategories}
			/>
		) : (
			<div>Fetching Event</div>
		)
	}
}

const msp = (state, ownProps) => {
	return {
		availableTypes: state.types,
		availableCategories: state.categories,
		currentUserId: state.session.user.id,
		event: state.events.current_users_events[ownProps.match.params.eventId]
	}
}

const mdp = dispatch => {
	return {
		submit: data => dispatch(updateEvent(data)),
		fetchCurrentUsersEvents: () => dispatch(fetchCurrentUsersEvents()),
		fetchTypes: () => dispatch(fetchTypes()),
		fetchCategories: () => dispatch(fetchCategories())
	}
}

export default connect(msp, mdp)(EditEventForm)
