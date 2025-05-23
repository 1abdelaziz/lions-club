import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import EventCard from "../EventCard/EventCard";
import AOS from 'aos';
import './UpcomingEvents.css';

export default function UpcomingEvents(props) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="upcoming-events py-5" data-aos="fade-up">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Featured Events</h2>
        </div>
        
        <div className="row g-4">
          {props.events.map((event, index) => (
            <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
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

