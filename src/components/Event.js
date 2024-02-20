import { useState } from "react";


const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className="event" >
            <h2>Event Title</h2>
            <p>Event Time</p>
            <p>Event Location</p>
            <button className='showDetailsButton'
                onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails ? (
                <div className="details">
                    <h3>Event Details</h3>
                    <p>{event.description}</p>
                </div>) : null}
        </li>
    )
}

export default Event;