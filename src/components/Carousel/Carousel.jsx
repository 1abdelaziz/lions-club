import CarouselSlide from '../CarouselSlide/CarouselSlide.jsx';
import './Carousel.css';

export default function Carousel(props) {
    let carouselIndicators = props.carouselSlides.map((slide, index) => (
        <button
            type="button"
            data-bs-target={`#${props.id}`}
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
            key={index}
        ></button>
    ));

    return (
        <div id={props.id} className={`carousel slide ${props.dark ? "carousel-dark" : ""}`} data-bs-ride={props.ride || null}>
            <div className="carousel-indicators">
                {carouselIndicators}
            </div>

            <div className="carousel-inner">
                {props.carouselSlides.map(slide => <CarouselSlide {...slide} />)}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}