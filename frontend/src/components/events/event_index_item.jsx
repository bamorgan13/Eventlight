import React from 'react'
import { Link } from 'react-router-dom'

class EventIndexItem extends React.Component {
	render() {
		const event = this.props.event

		let formattedLocation =
			event.location.location_address + ', ' + event.location.city.city + ', ' + event.location.city.state
		if (event.location.location_name) {
			formattedLocation.splice(0, 0, event.location.location_name, ', ')
		}

		let formattedPrice
		if (event.price === 0) {
			formattedPrice = 'Free'
		} else {
			formattedPrice = `Starting at $${event.price}`
		}

		return (
			<li className="event-index-list__item">
				<aside className="event-index-list__item__image-link">
					<Link className="event-index-list__item__image-link__link" to={`events/${event.id}`}>
						<img
							className="event-index-list__item_image-link__image"
							src={event.image_url}
							alt={`${event.title}`}
						/>
					</Link>
				</aside>
				<main className="event-index-list__item__title-link">
					<Link className="event-index-list__item__title-link__link" to={`events/${event.id}`}>
						<h3 className="event-index-list__item__title-link__title">{event.title}</h3>
					</Link>
					<div className="event-index-list__item__info">
						<p className="event-index-list__item__info__date">{event.start_date}</p>
						<p className="event-index-list__item__info__location">{formattedLocation}</p>
						<p className="event-index-list__item__info__price">{formattedPrice}</p>
					</div>
				</main>
			</li>
		)
	}
}

export default EventIndexItem
