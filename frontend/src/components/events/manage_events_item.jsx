import React from "react";
import { Link } from "react-router-dom";
import "../../styles/manage_events.css";
const moment = require("moment");

const ManageEventsItem = props => {
  const { event } = props;
  let capacityInfo
  if (event.capacity === null) {

    capacityInfo = <div className="manage-events-list-item-no-capacity">No capacity</div>;
    
   } else {
    const progressBarStyling = {
      width: `${5 / event.capacity * 100}%`
    };
    capacityInfo = (
      <div className="manage-events-list-item-capacity">
        <div className="manage-events-list-item-progress-bar">
          <div className="manage-events-list-item-progress-bar-progress" style={progressBarStyling}/>
        </div>
        <div className="manage-events-list-item-progress-fraction">
          <span>0</span> / {event.capacity}
        </div>
      </div>
    );
   } 

  return (
    <li className="manage-events-list-item">
        <div className="manage-events-list-item-info">
          <h3><span>{event.title}</span></h3>
          <span>{moment(event.start_date).format("lll")}</span>
          <ul className="manage-events-list-item-actions">
            <li className="manage-events-list-item-actions-text"><i className="fas fa-cog"></i>Manage</li>
            <li className="manage-events-list-item-actions-text"><Link to={`/events/${event._id}/edit`}><i className="fas fa-pencil-alt"></i>Edit</Link></li>
            <li className="manage-events-list-item-actions-text"><Link to={`/events/${event._id}`}><i className="fas fa-external-link-alt"></i>View</Link></li>
          </ul>
        </div>
        { capacityInfo }
      </li>  
  )
}

export default ManageEventsItem;