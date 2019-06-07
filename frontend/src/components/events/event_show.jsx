import React from 'react'
import { formatDateAndTime, formatMonth, formatLongDateNum } from '../../util/format_util'
import '../../styles/event_show.css'

class EventShow extends React.Component {
	componentWillMount() {
		this.props.fetchEvent(this.props.eventId)
	}

	render() {
		const { event, isLiked, toggleLikeEvent } = this.props

		if (!event) {
			return <div>Event not found</div>
		}

		const price = event.price ? `$${event.price}` : 'Free'
		const organizer = event.organizer_name ? `by ${event.organizer_name}` : ''

		const locationName = event.location.location_name ? (
			<p className="location__body__name">{event.location.location_name}</p>
		) : null
		const locationAddress = event.location.location_address ? (
			<p className="location__body__address">{event.location.location_address}</p>
		) : null
		const locationCity = `${event.location.city.city}, ${event.location.city.state}`

		return (
			<div className="event-show">
				<div className="event-show__blurred-background fade-in delay-4">
					<img
						className="event-show__blurred-background__image"
						src={event.image_url}
						alt="blurred background"
					/>
				</div>
				<div className="center-body">
					<div className="event-show__header fade-in delay-4">
						<img className="event-show__header__image fade-in delay-6" src={event.image_url} alt="event" />
						<div className="event-show__header__details">
							<div className="event-show__header__details__date">
								<p className="event-show__header__details__date__month">
									{formatMonth(event.start_date)}
								</p>
								<p className="event-show__header__details__date__number">
									{formatLongDateNum(event.start_date)}
								</p>
							</div>
							<h1 className="event-show__header__details__title">{event.title}</h1>
							<p className="event-show__header__details__organizer">{organizer}</p>
							<p className="event-show__header__details__price">{price}</p>
						</div>
					</div>
					<div className="like-and-register">
						<div className="like-container fade-in delay-12">
							<button className="like-button" onClick={() => toggleLikeEvent(event._id)}>
								<div className={isLiked ? 'like-icon--active' : 'like-icon'} />
							</button>
						</div>
						<div className="register-container fade-in delay-18">
							<button className="register-button">Tickets</button>
						</div>
					</div>
					<div className="event-show__body-container">
						<div className="event-show__body">
							<div className="event-show__body__description-container">
								<h3 className="event-show__body__header description">Description</h3>
								<pre className="description__body">{event.description}</pre>
							</div>
							<div className="event-show__body__details-container">
								<div className="event-show__body__date-container">
									<h3 className="event-show__body__header date">Date And Time</h3>
									<p className="date__body">{formatDateAndTime(event.start_date)}</p>
								</div>
								<div className="event-show__body__location-container">
									<h3 className="event-show__body__header location">Location</h3>
									<div className="location__body-container">
										{locationName}
										{locationAddress}
										<p className="location__body__city">{locationCity}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="organizer-container">
							<h2 className="organizer-name">{event.organizer_name}</h2>
							<p className="organized-by-title">
								{event.organizer_name ? `Organizer of ${event.title}` : null}
							</p>
							<p className="organizer-description">{event.organizer_description}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EventShow