import './CarouselSlide.css';

export default function CarouseSlide(props) {
    return (
        <div className={`carousel-item ${props.active ? 'active' : ''}`}>
            <div className='media-wrapper'>
                {props.isImg ? (
                <img src={props.img.src} className='d-block w-100' alt={props.img.alt} />
                ) : (
                <video className='d-block w-100' autoPlay loop muted playsInline>
                    <source src={props.video.src} type={props.video.type} />
                    Your browser does not support the video tag.
                </video>
                )}
                <div className='overlay'></div>
            </div>

            <div className='carousel-caption d-md-block'>
                <h2 className='text-white'>{props.title}</h2>
                <p className='text-white'>{props.caption}</p>

                {props.button && (
                <button type='button' className={props.button.class} onClick={props.button.onClick}>
                    {props.button.buttonText}
                </button>
                )}
            </div>
        </div>
    )
} 