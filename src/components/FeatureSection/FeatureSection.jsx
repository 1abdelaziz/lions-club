import { FaArrowRight } from 'react-icons/fa';
import './FeatureSection.css';

export default function FeatureSection(props) {
    return (
        <section className="feature-section row m-5">
            <div className={`text-container col ${props.img.right ? "left" : "right"}`}>
                <h2>{props.title}</h2>
                <p>{props.paragraph}</p>

                {props.ctaLink &&
                    <a href={props.ctaLink} className='link text-decoration-none text-dark'>{props.ctaText} <FaArrowRight /></a>
                }

                {props.ctaButton &&
                    <button type="button" className='btn btn-outline-primary d-inline-block w-50' onClick={props.onclick}>
                        {props.ctaText}
                    </button>
                }
            </div>            

            <div className={`img-container col ${props.img.right ? "right" : "left"}`}>
                <img src={props.img.src} alt={props.img.alt} className="img-fluid shadow-sm" />
            </div>
        </section>
    )
}
