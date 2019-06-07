import React from 'react'

class EventForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			type: '',
			category: '',
			organizer_name: '',
			location_type: '',
			location_address: '',
			start_date: '',
			end_date: '',
			image_url: '',
			description: '',
			price: '',
			capacity: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
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
								type="text"
								placeholder="Be clear and descriptive."
								value={this.state.title}
								onChange={this.handleChange('title')}
							/>
						</div>
					</div>
				</div>
			</form>
		)
	}
}

export default EventForm
