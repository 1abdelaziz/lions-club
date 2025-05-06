import { FaArrowRight } from "react-icons/fa";
import EventCard from "../EventCard/EventCard";
import './UpcomingEvents.css';

export default function UpcomingEvents(props) {
  return (
    <section className="upcoming-events py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Upcoming Events</h2>
        </div>
        
        <div className="row g-4">
          {props.events.map((event, index) => (
            <div key={index} className="col-md-4">
              <EventCard {...event} />
            </div>
          ))}
        </div>
        <div className="view-all-btn-container">
          <a href="#" className="view-all-btn btn btn-outline-primary text-decoration-none">
              View All Events <FaArrowRight className="ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
