import {FaClock, FaMapPin, FaCalendar, FaArrowRight, } from 'react-icons/fa';
import './EventCard.css';

export default function EventCard(props) {
    return (
        <div className="event-card-container card shadow-sm h-100">
            <img src={props.img.src} alt={props.img.alt} className="card-img-top object-fit-cover" style={{height: "200px"}} />
            <div className="card-body d-flex flex-column">
                <h3 className="card-title">{props.title}</h3>
                <div className="mb-2">
                    <h4 className='date text-muted'>
                        <FaCalendar className="me-2" />
                        {new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(props.date)}
                    </h4>
                    <h4 className='time text-muted'>
                        <FaClock className="me-2" />
                        {new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false }).format(props.startTime)} 
                        - 
                        {new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false }).format(props.endTime)}
                    </h4>
                    <h4 className='location text-muted'>
                        <FaMapPin className="me-2" />
                        {props.location}
                    </h4>
                </div>
                <p className="card-text flex-grow-1">{props.description}</p>
                <a className='link text-decoration-none text-dark mt-auto align-self-start' href={props.link}>
                    Learn More <FaArrowRight className="ms-1" />
                </a>
            </div>
        </div>
    )
}