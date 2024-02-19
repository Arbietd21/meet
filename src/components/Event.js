import { mockData } from '../mock-data'

const Event = () => {
    return (
        <li className="event">
            <h2 className="event-title">Event Title</h2>
            <p className="start-time">Event Start Time</p>
            <p className="event-location">Event Location</p>
        </li>
    )
}

export default Event;