import { FaArrowRight } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import './FeatureSection.css';

export default function FeatureSection(props) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <section data-aos="fade-up" className="feature-section row my-4">
            <div className={`text-container col-12 col-md-6 ${props.img.right ? "left" : "right"}`}>
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

            <div className={`img-container col-12 col-md-6 ${props.img.right ? "right" : "left"}`} data-aos="fade-up" data-aos-delay="100">
                <img src={props.img.src} alt={props.img.alt} className="img-fluid shadow-sm" />
            </div>
        </section>
    )
}

