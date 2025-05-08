import { useEffect } from "react";
import EventCard from "../EventCard/EventCard";
import AOS from 'aos';
import './EventsContainer.css';

export default function Events(props) {
  useEffect(() => {
          AOS.init({ duration: 3000, once: false });
  }, []);

  return (
    <section className="container upcoming-events py-5" data-aos="fade-up">        
        <div className="d-flex justify-content-center row g-4">
          {props.events.map((event, index) => (
            <div key={index} className="col-md-6 col-lg-4 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={index % 3 * 100}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
    </section>
  );
}

