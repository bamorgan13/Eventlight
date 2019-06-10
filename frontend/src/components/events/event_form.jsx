import React from 'react'
import DateTimePicker from 'react-datetime-picker'
import { merge } from 'lodash'

class EventForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			event: props.event,
			locationType: 'Venue',
			activeForm: 'basicInfo'
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handlePrevious = this.handlePrevious.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleLocationChange = this.handleLocationChange.bind(this)
	}

	componentWillMount() {
		this.props.fetchTypes()
		this.props.fetchCategories()
	}

	handleChange(field) {
		return e => {
			this.setState(merge({}, this.state, { event: { [field]: e.target.value } }))
		}
	}

	handleLocationChange(field) {
		return e => this.setState(merge({}, this.state, { event: { location: { [field]: e.target.value } } }))
	}

	handleCityStateChange(field) {
		return e => this.setState(merge({}, this.state, { event: { location: { city: { [field]: e.target.value } } } }))
	}

	handleDateTimeChange(field) {
		return e => this.setState(merge({}, this.state, { event: { [field]: e } }))
	}

	handleSubmit(e) {
		e.preventDefault()

		if (this.state.activeForm === 'basicInfo') {
			this.setState({ activeForm: 'details' })
		} else if (this.state.activeForm === 'details') {
			this.setState({ activeForm: 'tickets' })
		} else {
			this.props.submit(this.state.event)
		}
	}

	handlePrevious(e) {
		e.preventDefault()

		if (this.state.activeForm === 'details') {
			this.setState({ activeForm: 'basicInfo' })
		} else {
			this.setState({ activeForm: 'details' })
		}
	}

	render() {
		const event = this.state.event
		const typeOptions = Object.keys(this.props.availableTypes).map(typeId => {
			return this.state.event.type === this.props.availableTypes[typeId] ? (
				<option key={typeId} value={typeId} selected={true}>
					{this.props.availableTypes[typeId].name}
				</option>
			) : (
				<option key={typeId} value={typeId}>
					{this.props.availableTypes[typeId].name}
				</option>
			)
		})
		const categoryOptions = Object.keys(this.props.availableCategories).map(categoryId => {
			return event.category === this.props.availableCategories[categoryId] ? (
				<option key={categoryId} value={categoryId} selected={true}>
					{this.props.availableCategories[categoryId].name}
				</option>
			) : (
				<option key={categoryId} value={categoryId}>
					{this.props.availableCategories[categoryId].name}
				</option>
			)
		})
		const locationInputs =
			this.state.locationType === 'Venue' ? (
				<div className="event-form__location__inputs__venue">
					<div className="event-form__location__inputs__location-name">
						<label className="event-form__location__inputs__location-name__label">Venue Name</label>
						<input
							className="event-form__location__inputs__location-name__input"
							type="text"
							placeholder="e.g. Madison Square Garden"
							value={event.location.location_name}
							onChange={this.handleLocationChange('location_name')}
						/>
					</div>
					<div className="event-form__location__inputs__street-address">
						<h2 className="event-form__location__inputs__street-address__label">Street Address</h2>
						<div className="event-form__location__inputs__location-address">
							<label className="event-form__location__inputs__location-address__label">Address</label>
							<input
								className="event-form__location__inputs__location-address__input"
								type="text"
								placeholder="e.g. 155 5th Street"
								value={event.location.location_address}
								onChange={this.handleLocationChange('location_address')}
							/>
						</div>
						<div className="event-form__location__inputs__city">
							<label className="event-form__location__inputs__city__label">City</label>
							<input
								type="text"
								value={event.location.city.city}
								className="event-form__location__inputs__city__input"
								placeholder="e.g. San Francisco"
								onChange={this.handleCityStateChange('city')}
							/>
							<label className="event-form__location__inputs__state__label">State</label>
							<input
								type="text"
								value={event.location.city.state}
								className="event-form__location__inputs__state__input"
								placeholder="e.g. CA"
								onChange={this.handleCityStateChange('state')}
							/>
						</div>
					</div>
				</div>
			) : (
				<div className="event-form__location__inputs__online">
					<label className="event-form__location__inputs__online__label">Event URL</label>
					<input
						className="event-form__location__inputs__online__input"
						type="text"
						placeholder="URL at which your event is being hosted."
						value={event.online_url}
						onChange={this.handleChange('online_url')}
					/>
				</div>
			)

		const basicInfoForm = (
			<form className="event-form__basic-info-form" onSubmit={this.handleSubmit}>
				<div className="event-form__basic-info">
					<div className="event-form__basic-info__instructions">
						<h1 className="event-form__basic-info__instructions__header">Basic Info</h1>
						<p className="event-form__basic-info__instructions__details">
							Name your event and tell event-goers why they should come. Add details that highlight what
							makes it unique.
						</p>
					</div>
					<div className="event-form__basic-info__inputs">
						<div className="event-form__basic-info__inputs__title">
							<label className="event-form__basic-info__inputs__title__label">
								Event Title <span className="input__required">*</span>
							</label>
							<input
								className="event-form__basic-info__inputs__title__input"
								type="text"
								placeholder="Be clear and descriptive."
								value={event.title}
								onChange={this.handleChange('title')}
							/>
						</div>
						<div>
							<select onChange={this.handleChange('type')} value={event.type}>
								<option value="" disabled={true}>
									Type
								</option>
								{typeOptions}
							</select>
						</div>
						<div>
							<select onChange={this.handleChange('category')} value={event.category}>
								<option value="" disabled={true}>
									Category
								</option>
								{categoryOptions}
							</select>
						</div>
						<div className="event-form__basic-info__inputs__organizer-name">
							<label className="event-form__basic-info__inputs__organizer-name__label">Organizer</label>
							<input
								className="event-form__basic-info__inputs__organizer-name__input"
								type="text"
								placeholder="Be clear and descriptive."
								value={event.organizer_name}
								onChange={this.handleChange('organizer_name')}
							/>
						</div>
					</div>
				</div>
				<div className="event-form__location">
					<div className="event-form__location__instructions">
						<h1 className="event-form__location__instructions__header">Location</h1>
						<p className="event-form__location__instructions__details">
							Help people in the area discover your event and let attendees know where to show up.
						</p>
					</div>
					<div className="event-form__location__inputs">
						<div className="event-form__location__inputs__location-type">
							<select
								onChange={e => this.setState({ locationType: e.target.value })}
								value={this.state.locationType}
							>
								<option value="Venue">Venue</option>
								<option value="Online">Online event</option>
							</select>
							{locationInputs}
						</div>
					</div>
				</div>
				<div className="event-form__date">
					<div className="event-form__date__instructions">
						<h1 className="event-form__date__instructions__header">Date and Time</h1>
						<p className="event-form__date__instructions__details">
							Tell event-goers when your event starts and ends so they can make plans to attend.
						</p>
					</div>
					<div className="event-form__date__inputs">
						<div className="event-form__date__inputs__start-date">
							<DateTimePicker
								className="start-date"
								calendarClassName="start-date calendar"
								clockClassName="start-date clock"
								disableClock={true}
								amPm={true}
								onChange={this.handleDateTimeChange('start_date')}
								value={event.start_date}
							/>
						</div>
						<div className="event-form__date__inputs__end-date">
							<DateTimePicker
								className="end-date"
								calendarClassName="end-date calendar"
								clockClassName="end-date clock"
								disableClock={true}
								amPm={true}
								onChange={this.handleDateTimeChange('end_date')}
								value={event.end_date}
							/>
						</div>
					</div>
				</div>
				<input className="event-form__submit-button" type="submit" value="Save" />
			</form>
		)

		const detailsForm = (
			<form className="event-form__details-form" onSubmit={this.handleSubmit}>
				<button className="event-form__previous-button" onClick={this.handlePrevious}>
					Previous
				</button>
				<input className="event-form__submit-button" type="submit" value="Save" />
			</form>
		)

		const ticketsForm = (
			<form className="event-form__tickets-form" onSubmit={this.handleSubmit}>
				<button className="event-form__previous-button" onClick={this.handlePrevious}>
					Previous
				</button>
				<input className="event-form__submit-button" type="submit" value="Save" />
			</form>
		)

		let activeForm
		switch (this.state.activeForm) {
			case 'basicInfo':
				activeForm = basicInfoForm
				break
			case 'details':
				activeForm = detailsForm
				break
			case 'tickets':
				activeForm = ticketsForm
				break
			default:
				activeForm = basicInfoForm
		}

		return <div className="event-form__container">{activeForm}</div>
	}
}

export default EventForm
