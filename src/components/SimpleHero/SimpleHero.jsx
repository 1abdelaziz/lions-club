import { FaArrowRight } from 'react-icons/fa';
import './SimpleHero.css';

export default function SimpleHero(props) {
    return (
        <section className="hero-section bg-dark text-center text-white py-5" data-aos="fade-down">
            <h1>{props.title}</h1>
            <p className="lead">{props.paragraph}</p>

            {props.ctaLink &&
                <a href={props.ctaLink} className="link text-decoration-none text-white d-block mb-3">
                    {props.ctaText} <FaArrowRight />
                </a>
            }

            {props.ctaButton &&
                <button
                    type="button"
                    className="btn btn-outline-light px-4"
                    onClick={props.onclick}
                >
                    {props.ctaText}
                </button>
            }
        </section>
    );
}
