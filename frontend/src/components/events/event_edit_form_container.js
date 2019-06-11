import React from 'react'
import { connect } from 'react-redux'
import { updateEvent, fetchEvent } from '../../actions/event_actions'
import EventForm from './event_form'
import { fetchTypes } from '../../actions/type_actions'
import { fetchCategories } from '../../actions/category_actions'

class EditEventForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = { event: this.props.event }
	}

	componentDidMount() {
		this.props.fetchEvent(this.props.match.params.eventId)
	}

	componentWillReceiveProps(prevProps) {
		if (prevProps.match.params.eventId !== this.props.match.params.eventId) {
			this.props
				.fetchEvent(this.props.match.params.eventId)
				.then(() => this.setState({ event: this.props.event }))
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
		return (
			<EventForm
				event={event}
				submit={submit}
				fetchTypes={fetchTypes}
				fetchCategories={fetchCategories}
				fetchEvent={fetchEvent}
				availableTypes={availableTypes}
				availableCategories={availableCategories}
			/>
		)
	}
}

const msp = (state, ownProps) => {
	return {
		availableTypes: state.types,
		availableCategories: state.categories,
		currentUserId: state.session.user.id,
		event: state.events.all[ownProps.match.params.eventId]
	}
}

const mdp = dispatch => {
	return {
		submit: data => dispatch(updateEvent(data)),
		fetchEvent: id => dispatch(fetchEvent(id)),
		fetchTypes: () => dispatch(fetchTypes()),
		fetchCategories: () => dispatch(fetchCategories())
	}
}

export default connect(msp, mdp)(EditEventForm)
