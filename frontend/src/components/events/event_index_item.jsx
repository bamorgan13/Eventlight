import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/event_index_item.css'

class EventIndexItem extends React.Component {
	render() {
		const event = this.props.event

		const locationTerms = []
		if (event.location.location_name) {
			locationTerms.push(event.location.location_name)
		}
		if (event.location.location_address) {
			locationTerms.push(event.location.location_address)
		}
		if (event.location.city) {
			locationTerms.push(event.location.city.city, event.location.city.state)
		}
		const formattedLocation = locationTerms.join(', ')

		let formattedPrice
		let freeIndicator
		if (event.price === 0) {
			formattedPrice = 'Free'
			freeIndicator = <div className="free-indicator">Free</div>
		} else {
			formattedPrice = `Starting at $${event.price}`
		}

		const dateOptions = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
		let formattedDate = new Date(event.start_date).toLocaleString('en-US', dateOptions)
		formattedDate = formattedDate.slice(0, -3).concat(formattedDate.slice(-2).toLowerCase())

		return (
			<li className="event-index-list__item">
				<div className="event-index-list__item__content-outer-container">
					<div className="event-index-list__item__content-container">
						<aside className="event-index-list__item__image-link">
							<Link className="event-index-list__item__image-link__link" to={`events/${event._id}`}>
								<img
									className="event-index-list__item_image-link__image"
									src={event.image_url}
									alt={`${event.title}`}
								/>
							</Link>
							{freeIndicator}
						</aside>
						<main className="event-index-list__item__title-link">
							<Link className="event-index-list__item__title-link__link" to={`events/${event._id}`}>
								<h3 className="event-index-list__item__title-link__title">{event.title}</h3>
							</Link>
							<div className="event-index-list__item__info">
								<p className="event-index-list__item__info__date">{formattedDate}</p>
								<p className="event-index-list__item__info__location">{formattedLocation}</p>
								<p className="event-index-list__item__info__price">{formattedPrice}</p>
							</div>
							<button className="event-index-list__item__like-button">
								<div className="like-icon" />
							</button>
						</main>
					</div>
				</div>
			</li>
		)
	}
}

export default EventIndexItem
